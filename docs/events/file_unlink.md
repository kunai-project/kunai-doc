---
sidebar_position: 86
---

# File unlink

Event generated when a file gets unlinked

```json
{
  "data": {
    "command_line": "rm /tmp/test.txt",
    "exe": "/usr/bin/rm",
    "path": "/tmp/test.txt",
    "success": true
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 86,
      "name": "file_unlink",
      "uuid": "aa5f63c3-08b0-ab65-c419-62596fbd56c4",
      "batch": 74
    },
    ...
  }
}
```
