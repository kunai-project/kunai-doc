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
      "path": "/usr/bin/curl"
    },
    "mapped": {
      "path": "/usr/lib/libidn2.so.0.4.0",
      "md5": "73ac33824dd8f1814cfea858d8e89d97",
      "sha1": "0c0b9543ee6fc98eb9781f15c4827e09013b9621",
      "sha256": "96ec3ce438fecf2f6388b4c43d3fb4da3030858184eb2ba47c7f1960c8d70ec4",
      "sha512": "7408d893e6a7675d13434c8f612173c54d13e3cdad58d27ceb36f1fc7e23ff2eaddb81d720aa9434e25a4cb68ef4e079b33a4dfd2d079d62a50c6769a6a179df",
      "size": 132992,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 41,
      "name": "mmap_exec",
      "uuid": "8df3b627-afe4-0014-496b-17390a6948c0",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.469749874Z"
  }
}
```
