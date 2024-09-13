---
sidebar_position: 41
---

# Mmap exec

This events is generated whenever the `mmap` syscall is used to map an executable file in memory, with memory execution protection.

:::info
This will event will **catch only** shared-objects loaded with the common loading process using `mmap` syscall. Any custom loader, especially the ones used to bypass such monitoring, will not generate such an event. [Mprotect exec events](mprotect_exec) might help you catching suspicious loaders.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "file": "/usr/bin/curl"
    },
    // information about mmapped executable
    "mapped": {
      // file being mmapped
      "file": "/usr/lib/libnss_mdns_minimal.so.2",
      // metadata
      "md5": "76d1932173df8d0f0daeef5071ab1886",
      "sha1": "c40b486b6d453cc3d8be2cefd92811803ec1f36d",
      "sha256": "11cf188bb403da8f1683de157a44a2ae63ad812f44f9741ce52a9524a7c81d5a",
      "sha512": "e62d38ed78c97b3826c676e6528c9952e67a0b56bf48c63f2c5f5052d627cf8b7ffd2d87d56f402646043c607f0fbc4c2c78bec93d5c33498e3ed734b763ef25",
      "size": 18184
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 41,
      "name": "mmap_exec",
      "uuid": "04106c04-bb4b-4958-10b4-78a77952fa70",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.240763441Z"
  }
}
```