---
sidebar_position: 82
---

# Read config

This file is generated whenever a file located in `/etc` is being **read**.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "sudo rm /etc/kunai_test.conf",
    "exe": {
      "path": "/usr/bin/sudo"
    },
    "path": "/etc/passwd"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 82,
      "name": "read_config",
      "uuid": "16aa78c6-efb5-6276-b24d-911a1c5d7f32",
      "batch": 878
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.475065013Z"
  }
}
```

