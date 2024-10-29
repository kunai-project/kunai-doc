---
sidebar_position: 85
---

# File rename

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

