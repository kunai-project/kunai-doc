---
slug: bpf-door-case-study
title: BPFDoor case study
authors: [quentin]
tags: [malware, detection-engineering]
date: 2023-11-02T13:37
---

This blog post is meant to give an insight of how to use Kunai for detection engineering.

For those who didn't have the opportunity to attend the Kunai workshop at [Hack.lu 2023 edition](https://hack.lu) this is a way to catch up on a big part of what we have been doing during this session. For those who actually attended the workshop, you can take a read anyway because the post goes even more into the details, as we were limited in time.

<!-- truncate -->

## About the Sample Studied in this Post

**BPFDoor** has been chosen for this case study as it has been described, when it got discovered, as something not trivial to detect. The difficulties to detect mostly being depicted as the fact that it uses BPF based packet filtering to implement a nice backdoor. I will not deep dive in the description of what this malware is doing and how it works. If you want to know more about those topics, please find a non-exhaustive list of related posts and documents about BPFDoor malware in [references section](#about-bpfdoor).

<table>
  <tr>
    <td><b>Filename</b></td>
    <td>bpfdoor.mwr</td>
  </tr>
  <tr>
    <td><b>md5</b></td>
    <td>0017f7b913ce66e4d80f7e78cf830a2b</td>
  </tr>
  <tr>
    <td><b>sha1</b></td>
    <td>f1bf775746a5c882b9ec003617b2a70cf5a5b029</td>
  </tr>
  <tr>
    <td><b>sha256</b></td>
    <td>fa0defdabd9fd43fe2ef1ec33574ea1af1290bd3d763fdb2bed443f2bd996d73</td>
  </tr>
  <tr>
    <td><b>sha512</b></td>
    <td>ff5dd28ba3f5ce1f85f85fa9b65f9f30fbd300f2ca238cb2713da7077b7a0a8ff094cff4d7de9381726925abdd9ea065fa75ccd02fa5a816b71a6f91479363c1</td>
  </tr>
</table>

## Experiment Description

You can find here after the methodology followed in order to make our experiment. This methodology is not specific to this sample, so it can be used to study any malware you want with **Kunai**.

1. Run **Kunai** in such a way you capture the output (redirect output to file or configure output file)
2. Run malware
3. Interact with the malware if needed/possible

For the sake of simplicity, I have prepared everything for you. You can find the Kunai's output for this sample in the following file [bpfdoor.jsonl](./assets/bpfdoor.jsonl). To improve the readability of that file, it went through a step of filtering so that it contains only the events related to the sample.

:::info re-doing the experiments yourself
It is possible, but you have to known that the events in the file got generated with the latest git (under development) version of **Kunai**. Therefore, some events will be missing if you take the latest release (i.e. **0.1.0**).
:::

:::tip running BPFDoor
* run the sample as priviledged user otherwise it won't work
* the malware checks if an instance already running (you can know that by inspecting the source code or **stracing** the process)
:::

:::caution running malware must be done with care
* always do it in a dedicated machine (i.e. VM), preferably **isolated** from the Internet
* Linux container isolation is not enough (the kernel is shared between host and containers)
* it is always better to know a bit what to expect from the sample (i.e. make sure it does not exploit your hypervisor)
:::

## The Suspicious Events

The aim of this analysis is not necessarily to understand exactly what the malware is doing, as it can be achieved by other means (sandboxing, strace ...). The goal is to identify actionable events, on which we can build efficient detection rules. 

:::tip suspicious events
The notion of a suspicious event is sometimes universal, sometimes subjective and sometimes depends on the context. So you might find more/less events suspicious than me while you look at the logs. Anyway any detection rule built on top of those events should be tested before being put into production.
:::

### The Story of a Weird Command Line

The first event which should really catch our attention is the following. We see that a binary `/tmp/bpfdoor.mwr`, which should be qualified as unknown in a real infection, runs a rather suspicious one-liner command line.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr",
    "parent_exe": "/tmp/bpfdoor.mwr",
    "command_line": "sh -c /bin/rm -f /dev/shm/kdmtmpflush;/bin/cp ./bpfdoor.mwr /dev/shm/kdmtmpflush && /bin/chmod 755 /dev/shm/kdmtmpflush && /dev/shm/kdmtmpflush --init && /bin/rm -f /dev/shm/kdmtmpflush",
    "exe": {
      "file": "/usr/bin/dash",
      "md5": "1e6b1c887c59a315edb7eb9a315fc84c",
      "sha1": "803ffdb71aa236aa25009bef97db1b8ad0e3c62b",
      "sha256": "64e48365207d0c19008ba7d53d75c0de3fcd5a1590e4c40fc69c677663fedc20",
      "sha512": "0d261d7a8d615d080e20f1e1b294f168107dc2740da1a037d9519215e67e7a72dcc0f56c0006e5fdc04b7dbbd339171e9d2bf15f8e31f295d37aff499e1bc928",
      "size": 129816
    }
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "8f2fab25-ef70-3898-b52e-da2eaca820cc",
      "batch": 27
    },
    ...
  }
}
```

We clearly understand from this command line that the sample is copying itself to `/dev/shm` with a new name, changes its permissions, executes the new file and deletes it straight after. What else do we need to trigger the alarm ? This is already a good start, so lets extract some ideas out of this and continue our journey.

:::info /dev/shm
This is usually a **tmpfs** (in memory) filesystem so files running from that place will not persist on disk. Copying itself there, before executing and deleting itself could be seen as an attempt to evade malware cleaning run by an AV or any protection software.
:::

:::tip detection takeaways
* a command line with `cp`, `chmod`, `exec`, `rm` happening in this order might be considered as a suspicious one-liner
  * increase severity if `ancestors` contains a binary of a service exposed on the Internet
  * increase severity if `command_line` contains `/dev/shm`
:::

### Not Leaving Traces is Suspicious

The next event looking suspicious is the following and is strongly linked to the previous one. As it is the execution of the malware after it copied itself into `/dev/shm`.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr|/usr/bin/dash",
    "parent_exe": "/usr/bin/dash",
    "command_line": "/dev/shm/kdmtmpflush --init",
    "exe": {
      "file": "/dev/shm/kdmtmpflush",
      "md5": "",
      "sha1": "",
      "sha256": "",
      "sha512": "",
      "size": 0,
      "error": "file not found"
    }
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "38789315-0485-9af9-f511-27fe97b21a1c",
      "batch": 43
    },
    ...
  }
}
```

What makes that event suspicious is that **Kunai**, did not managed to compute hashing information out of the executable path. The reason for this is simple, and the event is self explanatory, the **file is not found**. As we have seen previously the malware deletes the file straight after the execution. This type of things (quickly modifying a file) after its execution races **Kunai**, and this is sad. I will not go into the technical details but this is not really something we can change. However, the important thing is that when such thing happens **Kunai** tells it to you. So even if some information is missing from that event, we can still use it as a reliable source of suspiciousness.

:::tip detection takeaways
* a binary for which we could not compute hashing information is suspicious, it means the file got modified/deleted straight after its execution
* a binary running from `/dev/shm` with priviledged user
* a known bad hash (not directly applicable to this event but to any event containing hashing information)
:::

### Changing its own Task Name

The next suspicious candidate is the malware changing its task name. It does it using the `prctl` syscall, passing the `PR_SET_NAME` option as a first argument.

```json
{
  "data": {
    "exe": "/dev/shm/kdmtmpflush",
    "command_line": "/dev/shm/kdmtmpflush --init",
    "option": "PR_SET_NAME",
    "arg2": "0x605368",
    "arg3": "0x0",
    "arg4": "0x6e75722d646c6168",
    "arg5": "0x3",
    "success": true
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 7,
      "name": "prctl",
      "uuid": "c8be60da-fa83-4a6c-aa8a-cbf1d38f8520",
      "batch": 45
    },
    "task": {
      "name": "hald-runner", // this is the new task name
      "pid": 1747,
      "tgid": 1747,
      "guuid": "7d64f958-4500-0000-82bb-77d6d3060000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531840
      },
      "flags": "0x00400000"
    },
    ...
  }
}
```

Changing task name cannot be considered as suspicious per se, you would probably see a lot of processes cloning/forking, changing their task names. So we have to use a bit more the data of this event to identify whether it is suspicious or not. We can observe two suspicious things though:
* our good old `/dev/shm` friend being in executable path
* `hald-runner` being used as a new task name, this is clearly an attempt to mimic a legit process/service task name in order to fool people looking at running processes

:::tip detection takeaways
* a binary located in `/dev/shm` changing its task name should raise an alert
* a task name being changed to mimic a legit binary
* it might be interesting to tag unknown (non whitelisted) binaries doing this and understand why they do so
:::

### Attaching BPF Filter on a Raw Socket + Bonus

Finally, the one we all expected and which gave its name to that malware ! We see that the executable is attaching a BPF filter to a raw socket `SOCK_RAW`.

```json
{
  "data": {
    "command_line": "hald-runner",
    "exe": "/dev/shm/kdmtmpflush",
    "socket": {
      "domain": "AF_PACKET",
      "type": "SOCK_RAW"
    },
    "filter": {
      "md5": "19c9f9f52a7d7bf1f9c26dc57034873b",
      "sha1": "c97c5ad700f7426432dbe4d6478f362714e835f0",
      "sha256": "1a23f76646d1741946afd2d6d3ce3d0deae14198b544b09322a540c345953988",
      "sha512": "af9fce79e05316999ae3ef82ea7a04ce299c611cb46e27154e455b9f9bea42631a5293dd42cb0d332d5e10b8ed924930321cb3433b7989e6fe9042d97338d477",
      "len": 30,
      "size": 240
    },
    "attached": true
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 22,
      "name": "bpf_socket_filter",
      "uuid": "839aa10e-243a-3238-b221-9f7d0c1cac95",
      "batch": 51
    },
    "task": {
      "name": "hald-runner",
      "pid": 1748,
      "tgid": 1748,
      "guuid": "ff313459-4500-0000-82bb-77d6d4060000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531840
      },
      "flags": "0x00400140"
    },
    "parent_task": {
      "name": "systemd", // this is init on this system
      "pid": 1,
      "tgid": 1,
      "guuid": "4b0dc405-0000-0000-82bb-77d601000000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531840
      },
      "flags": "0x00400100"
    },
    "utc_time": "2023-09-05T09:33:07.600987330Z"
  }
}
```

Attaching a BPF filter to a raw socket is definitely something suspicious ! But another thing interesting can be observed in this event. Our malware has suddently `systemd` as `parent_task`, while previously it was itself `hald-runner` (you have to look at the logs to verify that). So what the hell, happened ?

:::info zombie process
A zombie process, is a process still running while it's parent is dead. When that happens the Linux Kernel makes the `init` process become the parent of the zombie process. Becoming a zombie is not something usually done on purpose as it is often the symptom of a bug. But if you are a malware you might use that trick to make people think your parent process is `init` binary (systemd in my case) and that you are a legitimate service.
:::

So this zombie process information is definitely something we can use to detect something strange is going on. In the log file, this event is the only one you will see with `systemd` as parent. This is because after that event the malware listen up for packets arriving on the raw socket. But don't worry, I can guarantee that any subsequent activity of this malware would have exactly the same anomaly and would give you even more opportunities to catch it.

:::tip detection takeaways
* a binary attaching a BPF filter to a `SOCK_RAW`
* a binary attaching a BPF filter to a socket
  * increase severity if running in `/dev/shm`
  * increase severity if task name changed
    * increase severity if mimics a legit service
* any zombie process (parent_task became init pid=1)
  * increase severity if running in `/dev/shm` or unknown service binary
:::

### Going Further, for Even More Detection Possibilities

If you looked at the logs, you have probably noticed that the [previous event](#attaching-bpf-filter-on-a-raw-socket--bonus) we described is one of the last interesting things we see. Afer, everything looks to cleanup events. This is not all with this malware at all, as you may have also observed that the task with pid 1748 didn't exit.

```
root@ebpf-ubuntu-20:/tmp# ps aux | grep 1748
root        1748  0.0  0.0   2496    84 ?        Ss   Sep05   0:00 hald-runner
```

This is the task listening on the raw socket and waiting for commands. So the malware is still running and all we have analyzed so far are only the events generated when the malware is spawned on a system, we did not interact with the malware whatsoever. This is because I did not take the time to reverse-engineer the sample to know the password it expects when it receives packets on its raw socket. 

:::tip homework
* reverse the sample, find the key and send expected packets to the sample
* compile the malware from [sources][bpfdoor-src-code] (not guaranteed of being the exact same one) with a key you know and send packets to the sample
:::

What we can see from the [BPFDoor sources][bpfdoor-src-code], is that we can expect even more detection possibilities:

* the sample runs specific `iptables` commands
* it again changes task name, to `/usr/libexec/postfix/master`
* it can execute abitrary commands and very likely suspicious ones, which should not be ran from anything else than an interactive shell (`whoami`, `cat` ...). Programmers usually prefer using APIs rather than parsing shell outputs.
* we would see a binary located in `/dev/shm` communicating over the network

Another blind spot we have in this analysis is the original infection vector. I may have missed it but I didn't find this information online either. Anyway, what is important here is that knowing the infection vector would have been very likely an additional way to catch this sample. This is purely fictional but if we assume it went through a web server compromise, we would have seen at some point a `/dev/shm/kdmtmpflush` [execve event](/docs/events/execve) with a web server binary being in it's `ancestors` field.

:::tip detection takeaways
* something executed from `/dev/shm` running commands
  * increase severity if running commands such as `iptables`, `whoami`, `cat`
* a binary using a shell to execute commands (might need some whitelisting)
* something running in `/dev/shm` communicating over the Internet
* any service that has an exposed port on the Internet executing an unexpected binary
:::

### Bonus: Detecting the Mistakes made by BPFDoor Authors

Something I observed while running several times this BPFDoor sample is that it sometimes renames its task with something containing `/` (the Linux path separator). Such an example can be observed below. 

```json
{
  "data": {
    "exe": "/dev/shm/kdmtmpflush",
    "command_line": "/dev/shm/kdmtmpflush --init",
    "option": "PR_SET_NAME",
    "arg2": "0x605368",
    "arg3": "0x0",
    "arg4": "0x8",
    "arg5": "0x3",
    "success": true
  },
  "info": {
    ...
    "event": {
        ...
        "id": 7,
        "name": "prctl",
        ...
    },
    ...
    "task": {
      // new task name
      "name": "/usr/sbin/conso",
      ...
    },
    ...
}
```

This is even more obvious when looking at the [malware source code][bpfdoor-src-code], the name of the process is changed by randomly picking an entry in the following array.

```c
char *self[] = {
        "/sbin/udevd -d",
        "/sbin/mingetty /dev/tty7",
        "/usr/sbin/console-kit-daemon --no-daemon",
        "hald-addon-acpi: listening on acpi kernel interface /proc/acpi/event",
        "dbus-daemon --system",
        "hald-runner",
        "pickup -l -t fifo -u",
        "avahi-daemon: chroot helper",
        "/sbin/auditd -n",
        "/usr/lib/systemd/systemd-journald"
};
```

This caught my attention because this is not something you see very often in Linux and luckily for us there is a good explaination for that. The Linux Kernel, when performing execve it calls [begin_new_exec](https://elixir.bootlin.com/linux/latest/C/ident/begin_new_exec), itself calling [__set_task_comm(me, kbasename(bprm->filename), true)](https://elixir.bootlin.com/linux/latest/source/fs/exec.c#L1366). What it does is simple, `__set_task_comm` assigns the new task name with `kbasename(some_filename)`. And guess what, [kbasename](https://elixir.bootlin.com/linux/latest/C/ident/kbasename) is actually taking the [basename](https://en.wikipedia.org/wiki/Basename) out of a path.

:::info
task name is always **16 bytes** so any longer string is truncated. This is why in our event we see task name `/usr/sbin/conso`instead of `/usr/sbin/console-kit-daemon --no-daemon`
:::

All this to say that it should not be considered as normal to have a task name containing `/`. The `PR_SET_NAME` option of the prctl syscall is meant to change the task name. By convention (this is not enforced) task names does not contain any `/`. So it is not really a mis-use of the `prctl` syscall the malware authors did but they rather forgot/didn't know that Linux task name are not supposed to contain `/`. This anomaly could be used to detect such a bad programming practice, that I hope is seen only in malware !

:::tip detection takeaways
* a task name containing `/` is abnormal (programming mistake)
* a task name not contained in the `exe` filename is suspicious for unknown binary. Some whitelisting would be needed as threaded programs often rename their threads with custom names.
:::

## Conclusion

Assuming we have Kunai running on our machine, would it be complicated to detect this kind of sample knowing what we know now ? I would say no as there are enough suspicious things we can rely on and which should not trigger that many false positives.

This is always easy to say that we can detect things a posteriori. In order to have a chance to catch such sample in the wild, relevant generic rules and eventually heuristics need to be built. This is why it is very important to make as much as possible this kind of exercise as it would help us filling the gaps in detection rules. Sorry for all the guys who think they are protected because they bought an expensive commercial solution but you'd have to do this kind of work too, especially if you are a valuable target to attackers. I will not argue for hours about this but the main argument is that commercial solution are not bad per se, but they have to be generic enough to satisfy the more use cases as possible. Satisfying use cases is usually synonym of not having too many false positives, at the cost of discarding some true positives under some very specific/targetted environment. So if you have a commercial solution, do this job and enrich your detection rules, it won't be lost and you will probably make one of your engineers happy to use his brain.

In the reports, everyone tends to agree on one thing: this kind of malware is difficult to detect. Is it a question of stealthiness of the malware ? I don't think so, because we have seen it does a lot of very suspicious things, and we can expect many others (we did not interact with the shell). I rather think the issue is the lack of visibility most of the people have, at least those who cannot afford an EDR. So according to this absolutely impartial argument, it gives you a very good reason to use **Kunai**.

Happy Threat Detection and Hunting

## References

### About BPFDoor
* [Source code (probably not exactly the same one)][bpfdoor-src-code]
* https://www.countercraftsec.com/blog/a-step-by-step-bpfdoor-compromise/
* https://exatrack.com/public/Tricephalic_Hellkeeper.pdf
* https://www.trendmicro.com/en_us/research/23/g/detecting-bpfdoor-backdoor-variants-abusing-bpf-filters.html

[bpfdoor-src-code]: https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c