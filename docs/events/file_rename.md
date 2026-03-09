---
sidebar_position: 85
---

# File Rename

This event gets generated whenever a file is being renamed.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "old": "/run/udev/data/.#b43:19257ada2bd6cd89288",
    "new": "/run/udev/data/b43:192"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 85,
      "name": "file_rename",
      "uuid": "58a6f031-5dad-1c45-e4f1-2c665d04e700",
      "batch": 692
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:59.797557368Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `file_rename` event is crucial for:

1. **File Activity Monitoring**: Tracks when files are renamed or moved, providing visibility into file system modifications.
1. **Security Monitoring**: Detects suspicious file renaming patterns that may indicate malware attempting to hide files, ransomware activity, or unauthorized file manipulation.
1. **Forensic Analysis**: Establishes timelines of file movements for incident investigation and understanding attack patterns.

:::tip
This event captures both file renames and moves (which are essentially renames to a different directory). The `old` field shows the original path while `new` shows the destination path.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that renamed the file.

#### `.data.command_line`

- The command line of the process that renamed the file.

#### `.data.exe.path`

- The path to the executable that renamed the file.

#### `.data.old`

- The original path of the file before renaming.

#### `.data.new`

- The new path of the file after renaming.
