---
sidebar_position: 4
---

# Exit

Exit events get generated when a single task (process or thread) exits.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "file": "/usr/bin/curl"
    },
    "error_code": 0
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 4,
      "name": "exit",
      "uuid": "18428017-1410-9cf5-4c19-96ec7bb5b8bd",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.241019255Z"
  }
}
```