---
sidebar_position: 83
---

# Write

This event gets generated whenever a file is write.

:::info
If consecutive `write` operations are made on the same file, only one event will be generated for a given task.
:::

:::danger
If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the [configuration section](../configuration.md).
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/gcc",
    "command_line": "as --64 -o /tmp/cc5SLgFb.o /tmp/ccDONlAi.s",
    "exe": {
      "file": "/usr/bin/as"
    },
    "path": "/tmp/cc5SLgFb.o"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 83,
      "name": "write",
      "uuid": "4d118514-c06d-9699-b2cd-f33fdb94c494",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.237691754Z"
  }
}
```
