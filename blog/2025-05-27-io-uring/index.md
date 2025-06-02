---
slug: kunai-vs-io_uring
title: Kunai vs io_uring
authors: [quentin]
tags: [news, R&D, malware]
date: 2025-05-27T13:37
---

# Kunai vs io_uring

## Introduction

`io_uring` is a cutting-edge feature in the Linux kernel since version 5.1, revolutionizing input/output (I/O) operations through asynchronous processing. By using shared ring buffers between user space and the kernel, it minimizes system calls and context switches, significantly reducing latency and improving throughput. This makes it ideal for high-performance applications like databases, web servers, and real-time data processing systems. With support for a wide range of I/O operations and flexible polling mechanisms, `io_uring` offers unparalleled efficiency and scalability.

In this blog post, we explore how `io_uring` works, its security implications, and how tools like **Kunai** can monitor `io_uring` operations.

## How it Works

1. **Setting Up Shared Memory Areas**

   A userland program sets up two shared memory areas with the Linux kernel:
   - **Submission Queue (SQ):** Where submission queue entries (SQEs) are written by the userland program.
   - **Completion Queue (CQ):** Where completion queue entries (CQEs) are written by the kernel.

2. **Submitting SQEs**

   The program submits SQEs to request I/O operations without waiting for completion, enabling non-blocking I/O operations.

3. **Polling the CQ**

   The program regularly polls the CQ to check for the completion of I/O operations submitted in the submission queue.

This mechanism allows userland programs to rely on non-blocking syscalls and perform other processing while the kernel works, enhancing asynchronous coding possibilities.

However, there is always a trade-off between features and security, which we will explore in the following sections.

## I/O Uring Rootkit

This section discusses [curing](https://github.com/armosec/curing), a PoC `io_uring` rootkit released by [Armo](https://www.armosec.io/) and described in [this blog post](https://www.armosec.io/blog/io_uring-rootkit-bypasses-linux-security/). Curing is a rootkit that uses `io_uring` to perform tasks without traditional syscalls, making it invisible to several security tools that rely on syscall monitoring.

Armo did not test their rootkit against **Kunai**, and we were curious to see if it bypasses **Kunai** monitoring. Unfortunately, **Kunai** was completely blind to the **curing** rootkit. Admitting weaknesses is part of the improvement process, so let's understand why **Kunai** fails to detect `io_uring` operations.

## Why Kunai Fails to Detect io_uring Operations

Upon examining the Linux kernel, we found that almost every `io_uring` operation is handled by a dedicated function, different from traditional system calls. This can be seen in the [6.12 source](https://elixir.bootlin.com/linux/v6.12/source/io_uring/opdef.c#L52) (latest LTS at the time of writing).

```c
// This is the io_uring operation
[IORING_OP_READV] = {
    ...
    .async_size = sizeof(struct io_async_rw),
    .prep = io_prep_readv,
    .issue = io_read, // Function handling I/O
},
```

All I/O operations submitted via `io_uring` are handled by functions starting with the prefix `io_`. For example, [`io_read`](https://elixir.bootlin.com/linux/v6.12/source/io_uring/rw.c#L939) is dedicated to the `io_uring` subsystem and shares little code with traditional syscalls. Consequently, none of the kernel functions hooked by **Kunai** are reached during `io_uring` operations.

In summary, **Kunai** fails to detect `io_uring` operations because they are handled by dedicated functions that do not interact with the kernel functions monitored by **Kunai**.

## io_uring Auditing and Security in the Kernel

While examining the Linux source code, I reviewed the current auditing and security measures around the `io_uring` stack in the Linux kernel. Although these findings are not new, they are concerning.

Traditional syscalls benefit from broad auditing via auditd and security control via [Linux security modules hooks](https://elixir.bootlin.com/linux/v6.15/source/include/linux/security.h). However, the `io_uring` subsystem has minimal auditing and security control capabilities.

Kernel built-in auditing (excluding external tools) allows auditd to monitor `io_uring` operations since [v5.16](https://elixir.bootlin.com/linux/v5.16/source/fs/io_uring.c#L6666).

For `io_uring` security control through LSM, only kernel [v6.15](https://elixir.bootlin.com/linux/v6.15/source/security/security.c#L6005) (latest version at the time of writing) can block the `io_uring` stack. It is currently not possible to block only some kind of `io` operation.

| Kernel Version | Auditing | Security Control |
|----------------|----------|------------------|
| v5.1 to v5.16 | No | No |
| v5.16 to v6.15 | Yes | No |
| v6.15 onwards | Yes | Yes |

Additionally, `io_uring` is known to expose a large attack surface, leading to several kernel exploitations. Consequently, `io_uring` is restricted in Android and disabled in ChromeOS. If you are concerned about `io_uring`, consider disabling it via the [io_uring_disabled](https://www.kernel.org/doc/html/latest/admin-guide/sysctl/kernel.html#io-uring-disabled) parameter.

## Kunai's Solution

If you choose to continue running the `io_uring` stack, [this commit](https://github.com/kunai-project/kunai/commit/7331186b4ebd6ebb1a27153af80dfb62f537bb9a) allows monitoring `io_uring` operations since kernel **v5.4** (minimal version supported by **Kunai**). This enables systems running **Kunai** to gain `io_uring` visibility prior to kernel **v5.16**.

Implementation-wise, `io_uring` functions do not have the same function prototypes as traditional kernel functions used in system calls. Therefore, adapting existing eBPF probes in **Kunai** to hook into the `io_uring` stack is unrealistic. Ideally, the best solution would be to implement new probes for each `io_uring` operation we want to monitor. However, this is a significant amount of work, so we prefer to keep it for later while providing a simpler solution.

To monitor `io_uring` activity, we developed specific eBPF probes that attach to strategic kernel functions depending on the kernel version:

- **v5.1 to v5.4:** [`__io_submit_sqe`](https://elixir.bootlin.com/linux/v5.4/source/fs/io_uring.c#L2046)
- **v5.5 to 6.14:** [`io_issue_sqe`](https://elixir.bootlin.com/linux/v6.14/source/io_uring/io_uring.c#L1722)

This allows us to inspect any `io_uring` SQE and grab its [`io_uring_op`](https://elixir.bootlin.com/linux/v6.12/source/include/uapi/linux/io_uring.h#L203), representing the kind of I/O operation the SQE must perform. We then expose this information in a new event `io_uring_sqe`.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "command_line": "./io_uring /tmp/out.txt",
    "exe": {
      "path": "/bogus/path/io_uring"
    },
    "op": {
      "code": 23,
      "name": "IORING_OP_WRITE"
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 100,
      "name": "io_uring_sqe",
      "uuid": "6ed7d734-1a64-9541-8c5f-cc587ed4f5e0",
      "batch": 9
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-05-27T14:29:10.077239078Z"
  }
}
```

This event provides visibility into `io_uring` usage and can identify programs using `io_ring` and detect potentially suspicious activities. However, remember that `io_uring` blocking (through LSM) cannot be used before kernel **v6.15**. You can leverage **Kunai** actions in response to such events to kill processes using `io_uring`. Triggering **Kunai** actions will be useful to stop running malware, but it is not a reliable solution to prevent `io_uring`-based vulnerability exploitation, as **Kunai** actions may not be triggered in time to prevent successful execution of the exploit.

## Conclusion

`io_uring` represents a significant advancement in the Linux kernel's I/O capabilities, offering substantial performance benefits for applications requiring high throughput and low latency. However, its implementation also introduces new security challenges, as demonstrated by the difficulties in monitoring and securing `io_uring` operations.

### Key Takeaways

- **Performance Benefits:** `io_uring` significantly enhances I/O performance by reducing system call overhead and enabling asynchronous operations.
- **Security Concerns:** The unique handling of `io_uring` operations poses challenges for traditional security tools, necessitating updated approaches to monitoring and control.
- **Monitoring Solutions:** Tools like **Kunai** are evolving to provide visibility into `io_uring` operations, though blocking malicious activities remains a challenge.
- **Kernel-Level Controls:** Recent kernel versions have introduced auditing and security controls for `io_uring`, but these are still limited compared to traditional syscalls.

For those concerned about the security implications of `io_uring`, disabling it via the [`io_uring_disabled`](https://www.kernel.org/doc/html/latest/admin-guide/sysctl/kernel.html#io-uring-disabled) parameter may be a prudent measure. As the Linux kernel continues to evolve, it is crucial for developers and security professionals to stay informed about the latest developments in `io_uring` and adapt their strategies accordingly.