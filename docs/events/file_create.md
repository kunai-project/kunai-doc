---
sidebar_position: 88
---

# File Create

This event is generated when a new file is being created at `.data.path`.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "mktemp --suffix _kunai_test.sh",
    "exe": {
      "path": "/usr/bin/mktemp"
    },
    "path": "/tmp/tmp.TJcKMJp5AQ_kunai_test.sh"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 88,
      "name": "file_create",
      "uuid": "a200df19-173d-9f25-3816-a59d454dbf47",
      "batch": 557
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-11-28T14:37:45.584447666Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `file_create` event is crucial for:

1. **File Monitoring**: Tracks when new files are created on the system, providing visibility into file system activity.
1. **Security Monitoring**: Detects suspicious file creation patterns that may indicate malware installation or suspicious file creation.
1. **Forensic Analysis**: Establishes timelines of file creation for incident investigation and root cause analysis.

:::tip
This event captures the exact moment when a file is created, before any content is written to it. For monitoring file content **modification**, consider combining this with [`write`](write) and [`write_close`](write_close) events.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that created the file.

#### `.data.command_line`

- The command line of the process that created the file.

#### `.data.exe.path`

- The path to the executable that created the file.

#### `.data.path`

- The full path to the newly created file.
