---
sidebar_position: 1
---

# Execve

Execve events are generated whenever an `execve` syscall happens on the system. It provides information about the current binary currently running.

:::tip
This event gets generated only when `execve` syscall is successful
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/snap/lxd/24061/bin/lxd|/snap/lxd/24061/bin/lxd",
    "parent_exe": "/snap/lxd/24061/bin/lxd",
    "command_line": "/bin/systemd-tmpfiles --create --remove --boot --exclude-prefix=/dev",
    "exe": {
      "file": "/bin/systemd-tmpfiles",
      "md5": "c4c46154ce57c0a18b6a080df30e51ef",
      "sha1": "c90ddb71b76dd32fefb5285edc19b06ead09a148",
      "sha256": "39546d8fcf1cc7f0f0a6fa058174b04a748305c3fdc17574476e74f11ede4577",
      "sha512": "c31d7fe7443004ace75fb86eaf0cd73dccb38a732f6b9f42246785549b6da810eae3bb91ab04d84eb42e30e1b9edad0f36d4c9fe49154beb6d4a3ef8b23fbb54",
      "size": 71752
    }
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 1,
      "name": "execve",
      "uuid": "605639f8-37b5-7df7-c52f-eda680a38124",
      "batch": 21957
    },
    "task": {
      "name": "systemd-tmpfile",
      "pid": 4308,
      "tgid": 4308,
      "guuid": "6629cda0-7300-0000-ba5f-b80ed4100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
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
        "mnt": 4026532389
      }
    },
    "utc_time": "2023-06-26T07:12:55.030695982Z"
  }
}
```
