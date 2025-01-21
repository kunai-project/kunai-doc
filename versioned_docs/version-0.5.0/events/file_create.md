---
sidebar_position: 88
---

# File Create

This event is generated when a new file is being created at `.data.path`.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "mktemp --suffix _kunai_test.sh",
    "exe": {
      "path": "/usr/bin/mktemp"
    },
    "path": "/tmp/tmp.TJcKMJp5AQ_kunai_test.sh"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 88,
      "name": "file_create",
      "uuid": "a200df19-173d-9f25-3816-a59d454dbf47",
      "batch": 557
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-11-28T14:37:45.584447666Z"
  }
}
```
