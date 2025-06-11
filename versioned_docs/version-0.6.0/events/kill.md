---
sidebar_position: 8
---

# Kill

This event is generated when `kill` signal is send to a foreign process.
You can find under `.data.target` information about the process **targeted**
by the **signal** described by `.data.signal`. 

:::tip detection idea
This event can be used to detect processes attempting to kill specific processes
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "signal": "SIGTERM",
    "target": {
      "command_line": "/usr/lib/systemd/systemd-udevd",
      "exe": {
        "path": "/usr/bin/udevadm"
      },
      "task": {
        "name": "(udev-worker)",
        "pid": 403012,
        "tgid": 403012,
        "guuid": "db78e70f-6960-0000-cf99-449444260600",
        "uid": 0,
        "gid": 0,
        "namespaces": {
          "mnt": 4026532328
        },
        "flags": "0x400140"
      }
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 8,
      "name": "kill",
      "uuid": "7ea1f523-4520-f68b-7803-610ee8c702b8",
      "batch": 911
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.832376482Z"
  }
}
```


