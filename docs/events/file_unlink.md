---
sidebar_position: 86
---

# File Unlink

Event generated when a file gets unlinked.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "path": "/run/udev/watch/b43:128",
    "success": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 86,
      "name": "file_unlink",
      "uuid": "66d58529-0b24-ef1d-2b27-3e5a5a85d31b",
      "batch": 643
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:59.189301629Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `file_unlink` event is crucial for:

1. **File Activity Monitoring**: Tracks when files are deleted from the filesystem, providing visibility into file removal operations.
1. **Security Monitoring**: Detects suspicious file deletion patterns that may indicate malware cleanup or data destruction.
1. **Forensic Analysis**: Establishes timelines of file deletions for incident investigation and understanding attack cleanup phases.

:::tip
This event represents the `unlink` system call, which removes a file from the filesystem. Note that if other processes have the file open, the actual deletion may be deferred until all file descriptors are closed.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that unlinked the file.

#### `.data.command_line`

- The command line of the process that unlinked the file.

#### `.data.exe.path`

- The path to the executable that unlinked the file.

#### `.data.path`

- The path to the file that was unlinked (deleted).

#### `.data.success`

- Boolean indicating whether the unlink operation was successful.
