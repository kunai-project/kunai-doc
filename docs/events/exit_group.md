---
sidebar_position: 5
---

# Exit group

Event generated when a thread-group (process and all its threads) exits.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh",
    "command_line": "git rev-parse --show-toplevel",
    "exe": {
      "file": "/usr/bin/git"
    },
    "error_code": 0
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 5,
      "name": "exit_group",
      "uuid": "80f4dc9f-9114-eff1-3686-7785f7472a1f",
      "batch": 85
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:25.540539123Z"
  }
}
```

