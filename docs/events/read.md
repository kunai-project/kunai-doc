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
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 81,
      "name": "read",
      "uuid": "df27c38c-7307-1000-255f-a956d0423ec4",
      "batch": 22797
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
    "utc_time": "2023-06-26T07:13:00.458483351Z"
  }
}
```
