---
sidebar_position: 8
---

# Kill

This event is generated when `kill` signal is sent to a foreign process. You can find under `.data.target` information about the process **targeted** by the **signal** described by `.data.signal`.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "signal": "SIGTERM",
    "target": {
      "command_line": "/usr/lib/systemd/systemd-udevd",
      "exe": {
        "path": "/usr/bin/udevadm"
      },
      "task": {
        "name": "(udev-worker)",
        "pid": 403012,
        "tgid": 403012,
        "guuid": "db78e70f-6960-0000-cf99-449444260600",
        "uid": 0,
        "gid": 0,
        "namespaces": {
          "mnt": 4026532328
        },
        "flags": "0x400140"
      }
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 8,
      "name": "kill",
      "uuid": "7ea1f523-4520-f68b-7803-610ee8c702b8",
      "batch": 911
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.832376482Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `kill` event is crucial for:

1. **Process Management Monitoring**: Tracks when processes send signals to other processes, providing visibility into process control operations.
1. **Security Monitoring**: Detects suspicious process termination patterns that may indicate malicious activity, process killing attacks, or service disruption attempts.
1. **Forensic Analysis**: Establishes timelines of process termination for incident investigation and understanding attack patterns.

:::tip
This event specifically tracks signals sent to **foreign processes** (other processes), not signals a process sends to itself. The `signal` field shows the type of signal sent (e.g., SIGTERM, SIGKILL).
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that sent the signal.

#### `.data.command_line`

- The command line of the process that sent the signal.

#### `.data.exe.path`

- The path to the executable that sent the signal.

#### `.data.signal`

- The type of signal sent (e.g., SIGTERM, SIGKILL, SIGHUP).

#### `.data.target`

- Information about the target process including its command line, executable path, and task details.

#### `.data.target.command_line`

- The command line of the target process.

#### `.data.target.exe.path`

- The path to the executable of the target process.

#### `.data.target.task`

- Detailed task information about the target process including name, PID, TGID, GUUID, user/group IDs, namespaces, and flags.
