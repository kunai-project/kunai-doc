---
sidebar_position: 82
---

# Read config

This file is generated whenever a file located in `/etc` is being **read**.

```json
{
  "data": {
    "command_line": "sed -e /^ *#/d -e s/.*[[:blank:]]\\(tty[1-9][0-9]*\\).*/\\1/ -e s/.*[[:blank:]]\\(ttyv[0-9a-f]\\).*/\\1/",
    "exe": "/bin/sed",
    "path": "/etc/locale.alias"
  },
  "info": {
    ...
    "event": {
        ...
        "id": 82,
        "name": "read_config",
        ...
    },
    ...
  }
}
```
