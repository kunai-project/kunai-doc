---
sidebar_position: 81
---

# Read

This event gets generated whenever a file is read.

:::info
* If consecutive `read` operations are made on the same file, only one event will be generated for a given task.
* Events gets generated on `read` variant syscalls. It means a file just being opened with `open` kind of syscalls won't generate any event until being actually read.
:::

:::danger
If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the [configuration section](../configuration.md).
:::

```json
{
  "data": {
    "command_line": "useradd ubuntu --comment Ubuntu --groups adm,audio,cdrom,dialout,dip,floppy,lxd,netdev,plugdev,sudo,video --shell /bin/bash -m",
    "exe": "/usr/sbin/useradd",
    "path": "/lib/x86_64-linux-gnu/libsepol.so.1"
  },
  "info": {
    ...
    "event": {
        ...
        "id": 81,
        "name": "read",
        ...
    },
    ...
  }
}
```
