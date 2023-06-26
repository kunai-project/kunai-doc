---
sidebar_position: 80
---

# Mount

This event gets generated when a path gets mounted on the system.

```json
{
  "data": {
    "command_line": "(imedated)",
    "exe": "/lib/systemd/systemd",
    "dev_name": "/run/systemd/inaccessible/dir",
    "path": "/lib/modules",
    "type": "",
    "success": true
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 80,
      "name": "mount",
      "uuid": "566464f6-1421-cffd-d3b7-43b860d41411",
      "batch": 23230
    },
    "task": {
      "name": "(imedated)",
      "pid": 4723,
      "tgid": 4723,
      "guuid": "db91e16c-7500-0000-ba5f-b80e73120000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532510
      }
    },
    "parent_task": {
      "name": "systemd",
      "pid": 4154,
      "tgid": 4154,
      "guuid": "13729d78-7300-0000-ba5f-b80e3a100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532510
      }
    },
    "utc_time": "2023-06-26T07:13:02.707404909Z"
  }
}
```
