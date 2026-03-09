---
sidebar_position: 7
---

# Prctl

A `prctl` event is generated when a process makes a call to the [`prctl`](https://man7.org/linux/man-pages/man2/prctl.2.html) **syscall**. As you can read in the man page, this syscall can be used to achieve a wide range of operations. Some of them might be considered as malicious, depending on the context.

:::tip
* `.data.option`: the first argument to prctl syscall
  * if option is `PR_SET_NAME` the new task name can be obtained in `.info.task.name`
* `.data.arg[2-5]`: others arguments to prctl, their meaning depends on option
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "sudo rm /etc/kunai_test.conf",
    "exe": {
      "path": "/usr/bin/sudo"
    },
    "option": "PR_CAP_AMBIENT",
    "arg2": "0x1",
    "arg3": "0x0",
    "arg4": "0x0",
    "arg5": "0x0",
    "success": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 7,
      "name": "prctl",
      "uuid": "f87e9b31-8686-6d7d-f3fb-7dd98d21caee",
      "batch": 878
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.475355358Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `prctl` event is crucial for:

1. **Security Monitoring**: Detects suspicious prctl operations that may indicate privilege escalation attempts, capability manipulations, or process hiding.
1. **Anomaly Detection**: Identifies unusual process control patterns that may indicate malicious activity or system manipulation.
1. **Forensic Analysis**: Provides detailed information about process behavior modifications for incident investigation.

:::tip
The `prctl` syscall can be used for various operations including setting process names, manipulating capabilities, controlling dumpable status, and more. Some operations like `PR_CAP_AMBIENT` (capability manipulation) or `PR_SET_DUMPABLE` (core dump control) can be security-relevant.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that called prctl.

#### `.data.command_line`

- The command line of the process that called prctl.

#### `.data.exe.path`

- The path to the executable that called prctl.

#### `.data.option`

- The prctl operation being performed (e.g., PR_CAP_AMBIENT, PR_SET_NAME, PR_SET_DUMPABLE).

#### `.data.arg2`

- The second argument to the prctl syscall (meaning depends on the option).

#### `.data.arg3`

- The third argument to the prctl syscall (meaning depends on the option).

#### `.data.arg4`

- The fourth argument to the prctl syscall (meaning depends on the option).

#### `.data.arg5`

- The fifth argument to the prctl syscall (meaning depends on the option).

#### `.data.success`

- Boolean indicating whether the prctl operation was successful.
