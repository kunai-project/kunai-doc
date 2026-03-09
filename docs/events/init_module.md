---
sidebar_position: 20
---

# Init Module

This kind of event is generated when a kernel module is loaded into the kernel.

:::tip module metadata
Due to the nature of [`init_module`](https://man7.org/linux/man-pages/man2/init_module.2.html) syscall, it is fairly complicated to find a reliable way to get access to kernel module data (in pure eBPF) and extract hashing information from it.

Until we find a solution to that issue, we propose to detect suspicious modules loaded based on the loading context (ancestors, loader ...) rather than on the data of the module being loaded.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo",
    "command_line": "modprobe nbd max_part=42",
    "exe": {
      "path": "/usr/bin/kmod"
    },
    "syscall": "finit_module",
    "module_name": "nbd",
    "args": "max_part=42",
    "loaded": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 20,
      "name": "init_module",
      "uuid": "adb54376-1f88-7b3b-7de2-c933a468dce6",
      "batch": 695
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:59.794342920Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `init_module` event is crucial for:

1. **Kernel Security**: Tracks when kernel modules are loaded, which can significantly impact system security.
1. **Rootkit Detection**: Detects unauthorized kernel module loading that may indicate rootkit installation or kernel-level malware.
1. **Forensic Analysis**: Provides detailed information about loaded kernel modules for incident investigation and understanding system compromise.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that loaded the kernel module.

#### `.data.command_line`

- The command line used to load the kernel module.

#### `.data.exe.path`

- The path to the executable that loaded the kernel module.

#### `.data.syscall`

- The system call used to load the module (`init_module` or `finit_module`).

#### `.data.module_name`

- The name of the kernel module being loaded.

#### `.data.args`

- The arguments passed to the kernel module.

#### `.data.loaded`

- Boolean indicating whether the kernel module was successfully loaded.
