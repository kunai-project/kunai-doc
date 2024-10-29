---
sidebar_position: 4
---

# Exit

Exit events get generated when a single task (process or thread) exits.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl -d RCKhLa0Ka70LTYgF4eJiQkAspo9Yevj3dMjuSc0NwpOauPicV3P4bajH1paLQMvYGIILwrHk3cpxgS4FDVAUn5XiT0ucGNoVYd2FAjg6hP1zXSH9KCKJhB3ixUq8APtqSJ1DPVYGPOSyCIaHb9Nh4QOJe0UiYjogNoiFBRYVIL8hFgI607LW0MVxcTQqPdX9Utuw9MXxyEaN6TVcFWmKAxrV5BsgP9YYeXyWwda62Kg5aqsq2cdPy9jm9s6S6Brr https://why.kunai.rocks",
    "exe": {
      "path": "/usr/bin/curl"
    },
    "error_code": 0
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 4,
      "name": "exit",
      "uuid": "8704d9da-383b-956d-a4b3-a5fc48c894e5",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.472855976Z"
  }
}
```
