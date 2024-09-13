---
sidebar_position: 86
---

# File unlink

Event generated when a file gets unlinked

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "(udev-worker)",
    "exe": {
      "file": "/usr/bin/udevadm"
    },
    "path": "/run/udev/watch/557",
    "success": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 86,
      "name": "file_unlink",
      "uuid": "d4927cf9-28c1-5c82-ea79-d3f235d2843f",
      "batch": 28
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:17.433963633Z"
  }
}
``
