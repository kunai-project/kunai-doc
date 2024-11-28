---
sidebar_position: 5
---

# Exit Group

Event generated when a thread-group (process and all its threads) exits.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh|/usr/bin/zsh|/usr/bin/zsh",
    "command_line": "tail -n1",
    "exe": {
      "path": "/usr/bin/tail"
    },
    "error_code": 0
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 5,
      "name": "exit_group",
      "uuid": "649bc187-7d2e-495a-254f-ef2b12968e3f",
      "batch": 121
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:50.954498024Z"
  }
}
```


