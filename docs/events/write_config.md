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
      "file": "/usr/bin/tee"
    },
    "path": "/etc/kunai_test.conf"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 84,
      "name": "write_config",
      "uuid": "a6d14f92-cc27-9460-f383-a8ba3e3fceba",
      "batch": 69
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.249995764Z"
  }
}
```
