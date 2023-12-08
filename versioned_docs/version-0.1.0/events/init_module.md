---
sidebar_position: 20
---

# Init module

This kind of event is generated when a kernel module is loaded into the kernel.


```json
{
  "data": {
    "command_line": "modprobe nbd max_part=16",
    "exe": "/usr/bin/kmod",
    "module_name": "nbd",
    "args": "max_part=16",
    "userspace_addr": "0x7f0691268010",
    "loaded": true
  },
  "info": {
    ...
    "event": {
        ...
        "id": 20,
        "name": "init_module",
        ...
    },
    ...
  }
}
```
