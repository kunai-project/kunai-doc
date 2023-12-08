---
sidebar_position: 80
---

# Mount

This event gets generated when a path gets mounted on the system.

```json
{
  "data": {
    "command_line": "(imedated)",
    "exe": "/lib/systemd/systemd",
    "dev_name": "/run/systemd/inaccessible/dir",
    "path": "/lib/modules",
    "type": "",
    "success": true
  },
  "info": {
    ...
    "event": {
        ...
        "id": 80,
        "name": "mount",
        ...
    },
    ...
  }
}
```
