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
    // list of ancestors of that task (| separated)
    "ancestors": "/usr/lib/systemd/systemd|/snap/lxd/24061/bin/lxd|/snap/lxd/
    24061/bin/lxd",
    // parent binary
    "parent_exe": "/snap/lxd/24061/bin/lxd",
    // command line
    "command_line": "/bin/systemd-tmpfiles --create --remove --boot --exclude-prefix=/dev",
    // information related to the current executable of the task
    // if the event happen in a container all information is
    // relative to the container
    "exe": {
      // file on disk
      "file": "/bin/systemd-tmpfiles",
      // metadata of the file
      "md5": "c4c46154ce57c0a18b6a080df30e51ef",
      "sha1": "c90ddb71b76dd32fefb5285edc19b06ead09a148",
      "sha256": "39546d8fcf1cc7f0f0a6fa058174b04a748305c3fdc17574476e74f11ede4577",
      "sha512": "c31d7fe7443004ace75fb86eaf0cd73dccb38a732f6b9f42246785549b6da810eae3bb91ab04d84eb42e30e1b9edad0f36d4c9fe49154beb6d4a3ef8b23fbb54",
      "size": 71752
    }
  },
  "info": {
    ...
    "event": {
        ...
        "id": 1,
        "name": "execve",
        ...
    },
    ...
  }
}
```
