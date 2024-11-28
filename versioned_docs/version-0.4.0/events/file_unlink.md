---
sidebar_position: 86
---

# File Unlink

Event generated when a file gets unlinked

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
