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
    ...
    "event": {
        ...
        "id": 84,
        "name": "write_config",
        ...
    },
    ...
  }
}
```
