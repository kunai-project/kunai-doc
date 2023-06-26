---
sidebar_position: 84
---

# Write config

This file is generated whenever a file located in `/etc` is being **written**.

```json
{
  "data": {
    "command_line": "useradd ubuntu --comment Ubuntu --groups adm,audio,cdrom,dialout,dip,floppy,lxd,netdev,plugdev,sudo,video --shell /bin/bash -m",
    "exe": "/usr/sbin/useradd",
    "path": "/etc/gshadow+"
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 84,
      "name": "write_config",
      "uuid": "c96b17c9-d1d0-6ad5-c975-1ef7782ae6c5",
      "batch": 22804
    },
    "task": {
      "name": "useradd",
      "pid": 4539,
      "tgid": 4539,
      "guuid": "93bed4e4-7400-0000-ba5f-b80ebb110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "parent_task": {
      "name": "cloud-init",
      "pid": 4526,
      "tgid": 4526,
      "guuid": "415771b5-7400-0000-ba5f-b80eae110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "utc_time": "2023-06-26T07:13:00.835236568Z"
  }
}
```
