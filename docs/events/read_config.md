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
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 82,
      "name": "read_config",
      "uuid": "98f3c207-2b58-f794-9085-0c7171a220c9",
      "batch": 22193
    },
    "task": {
      "name": "sed",
      "pid": 4439,
      "tgid": 4439,
      "guuid": "b9369be1-7300-0000-ba5f-b80e57110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "parent_task": {
      "name": "setupcon",
      "pid": 4435,
      "tgid": 4435,
      "guuid": "308596e1-7300-0000-ba5f-b80e53110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "utc_time": "2023-06-26T07:12:56.217528200Z"
  }
}
```
