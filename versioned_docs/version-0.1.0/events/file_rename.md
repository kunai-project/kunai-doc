---
sidebar_position: 85
---

# File rename

This event gets generated whenever a file is being renamed.

```json
{
  "data": {
    "command_line": "(snapd)",
    "exe": "/lib/systemd/systemd",
    "old": "/var/cache/snapd/names.phXLpRTKs1Bb~",
    "new": "/var/cache/snapd/names"
  },
  "info": {
    ...
    "event": {
        ...
        "id": 85,
        "name": "file_rename",
        ...
    },
    ...
  }
}
```
