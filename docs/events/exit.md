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
    "host": {
      "hostname": "ubuntu-22-04",
      "container": null
    },
    "event": {
      "id": 4,
      "name": "exit",
      "uuid": "44f70896-d826-65bb-39e5-5782a1cb6e4d",
      "batch": 136
    },
    "task": {
      "name": "journal-offline",
      "pid": 3432,
      "tgid": 383,
      "guuid": "7ff80efd-0000-0000-ba5f-b80e7f010000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531841
      }
    },
    "parent_task": {
      "name": "systemd",
      "pid": 1,
      "tgid": 1,
      "guuid": "bc203e04-0000-0000-ba5f-b80e01000000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531841
      }
    },
    "utc_time": "2023-06-26T07:09:43.515408409Z"
  }
}
```
