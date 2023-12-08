---
sidebar_position: 4
---

# Exit

Exit events get generated when a single task (process or thread) exits.

```json
{
  "data": {
    "command_line": "/lib/systemd/systemd-journald",
    "exe": "/usr/lib/systemd/systemd-journald",
    "error_code": 18446650047252267000
  },
  "info": {
    ...
    "event": {
        ...
        "id": 4,
        "name": "exit",
        ...
    },
    ...
  }
}
```
