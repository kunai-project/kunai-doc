---
sidebar_position: 84
---

# Write config

This file is generated whenever a file located in `/etc` is being **written**.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo",
    "command_line": "tee /etc/kunai_test.conf",
    "exe": {
      "path": "/usr/bin/tee"
    },
    "path": "/etc/kunai_test.conf"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 84,
      "name": "write_config",
      "uuid": "4903ced0-5bad-c3db-9325-5ea6a6c4da90",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.474792288Z"
  }
}
```

