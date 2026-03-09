---
sidebar_position: 9
---

# Ptrace

Event generated when a [`ptrace`](https://www.man7.org/linux/man-pages/man2/ptrace.2.html) syscall is issued. `.data.mode` reflects the `ptrace` mode as defined in [**Linux Kernel headers**](https://elixir.bootlin.com/linux/v6.11.5/source/include/linux/ptrace.h#L62)

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "gdb -p 935306",
    "exe": {
      "path": "/usr/bin/gdb"
    },
    "mode": "0xa",
    "target": {
      "command_line": "sleep 10",
      "exe": {
        "path": "/usr/bin/sleep"
      },
      "task": {
        "name": "sleep",
        "pid": 935306,
        "tgid": 935306,
        "guuid": "8c91a438-a93f-0200-2f3d-83cf8a450e00",
        "uid": 1000,
        "gid": 1000,
        "namespaces": {
          "mnt": 4026531841
        },
        "flags": "0x400000"
      }
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 9,
      "name": "ptrace",
      "uuid": "d6a3fb85-c7cd-1966-be39-f05efc29372a",
      "batch": 578
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-11-04T15:10:20.061897435Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `ptrace` event is crucial for:

1. **Process Debugging Monitoring**: Tracks when processes use ptrace to debug or inspect other processes.
1. **Security Monitoring**: Detects suspicious ptrace activity that may indicate process injection, memory inspection, or any other debugging attempt.
1. **Forensic Analysis**: Provides information about process inspection activities for incident investigation.

:::tip
The `ptrace` syscall is commonly used by debuggers like gdb, but can also be used maliciously for process injection or memory manipulation.
:::

:::caution
 This event currently fires **only** when `.data.mode` contains the `PTRACE_MODE_ATTACH` flag, indicating a process is attaching to another process for debugging.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that called ptrace.

#### `.data.command_line`

- The command line of the process that called ptrace.

#### `.data.exe.path`

- The path to the executable that called ptrace.

#### `.data.mode`

- The ptrace mode flags indicating the type of ptrace operation.

#### `.data.target`

- Information about the target process being traced.

#### `.data.target.command_line`

- The command line of the target process.

#### `.data.target.exe.path`

- The path to the executable of the target process.

#### `.data.target.task`

- Detailed task information about the target process including name, PID, TGID, GUUID, user/group IDs, namespaces, and flags.
