---
sidebar_position: 85
---

# File rename

This event gets generated whenever a file is being renamed.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "(udev-worker)",
    "exe": {
      "file": "/usr/bin/udevadm"
    },
    "old": "/run/udev/data/.#b43:8326cd9d4638c93c76d",
    "new": "/run/udev/data/b43:832"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 85,
      "name": "file_rename",
      "uuid": "de4a8d3a-3ccb-d848-d0d4-c44741730ece",
      "batch": 33
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:17.677653462Z"
  }
}
```
