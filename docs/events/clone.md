---
sidebar_position: 6
---

# Clone

A task is being cloned/forked. This means that a new task will be created on the system.

:::tip new task
* The information related to the **new task** (i.e. cloned/forked) will appear under the `.info.task` section of this event.
* If there is not `execve` following, the executable of the task remains the same
* `.data.flags` is the **flags mask** (c.f. [manual](https://www.man7.org/linux/man-pages/man2/clone.2.html)) passed to `clone`
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "flags": "0x1200000"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 6,
      "name": "clone",
      "uuid": "ccd9e8fa-5684-b753-ce65-5527157b33f7",
      "batch": 605
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.259432812Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `clone` event is crucial for:

1. **Process Monitoring**: Tracks the creation of new processes/threads, providing visibility into process lineage and system activity.
1. **Security Monitoring**: Detects unusual process creation patterns that may indicate malicious activity or process injection.
1. **Forensic Investigation**: Establishes process relationships and timelines for incident response and root cause analysis.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that performed the clone operation.

#### `.data.command_line`

- The command line of the process that performed the clone operation.

#### `.data.exe.path`

- The path to the executable that performed the clone operation.

#### `.data.flags`

- The flags mask passed to the `clone` system call, indicating how the new task should be created (e.g., shared memory, shared filesystem, etc.).
