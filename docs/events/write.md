---
sidebar_position: 83
---

# Write

This event gets generated whenever a file is write.

:::info
If consecutive `write` operations are made on the same file, only one event will be generated for a given task.
:::

:::danger
If you decide to enable these events (disabled by default), please be aware that there will be a large number of them. Make sure you have read the [configuration section](../configuration.md).
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "command_line": "/bin/bash ./generate-activity.sh",
    "exe": {
      "path": "/usr/bin/bash"
    },
    "path": "/tmp/tmp.URdsDAjMAu_kunai_test.sh"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 83,
      "name": "write",
      "uuid": "c9fb9d68-073c-7fd4-8e9f-b2b38e3b2d32",
      "batch": 606
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.845139221Z"
  }
}
```

