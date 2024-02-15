---
sidebar_position: 82
---

# Read config

This file is generated whenever a file located in `/etc` is being **read**.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "sudo rmmod nbd",
    "exe": {
      "file": "/usr/bin/sudo"
    },
    "path": "/etc/passwd"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 82,
      "name": "read_config",
      "uuid": "0307b677-3bbb-41e2-5760-f88cc2c8332f",
      "batch": 24
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:16.952790421Z"
  }
}
```

