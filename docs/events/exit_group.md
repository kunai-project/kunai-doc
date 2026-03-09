---
sidebar_position: 5
---

# Exit Group

Event generated when a thread-group (process and all its threads) exits.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh|/usr/bin/zsh|/usr/bin/zsh",
    "command_line": "tail -n1",
    "exe": {
      "path": "/usr/bin/tail"
    },
    "error_code": 0
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 5,
      "name": "exit_group",
      "uuid": "649bc187-7d2e-495a-254f-ef2b12968e3f",
      "batch": 121
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:50.954498024Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `exit_group` event is crucial for:

1. **Process Lifecycle Monitoring**: Tracks when complete processes (including all threads) terminate, providing visibility into application lifecycles.
1. **Security Monitoring**: Detects unusual process group termination patterns that may indicate system instability or malicious activity.
1. **Application Monitoring**: Monitors when multi-threaded applications complete execution or crash.

:::tip
This event differs from the `exit` event in that it represents the termination of an entire thread group (process + all threads) rather than a single task. The `error_code` indicates the overall exit status of the process group.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that exited.

#### `.data.command_line`

- The command line of the process group that exited.

#### `.data.exe.path`

- The path to the executable that exited.

#### `.data.error_code`

- The exit status code of the process group (0 for success, non-zero for errors).
