---
sidebar_position: 20
---

# Init module

This kind of event is generated when a kernel module is loaded into the kernel.

:::tip module metadata
Due to the nature of [`init_module`](https://man7.org/linux/man-pages/man2/init_module.2.html) syscall, it is fairly complicated to find a reliable way to get access to kernel module data (in pure eBPF) and extract hashing information from it.

Until we find a solution to that issue, we propose to detect suspicious modules loaded based on the loading context (ancestors, loader ...) rather than on the data of the module being loaded.
:::


```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/sudo|/usr/bin/sudo",
    "command_line": "modprobe nbd max_part=16",
    "exe": "/usr/bin/kmod",
    "module_name": "nbd",
    "args": "max_part=16",
    "userspace_addr": "0x7f0691268010",
    "loaded": true
  },
  "info": {
    ...
    "event": {
        ...
        "id": 20,
        "name": "init_module",
        ...
    },
    ...
  }
}
```
