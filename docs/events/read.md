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
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "sudo docker run -it --rm -h ubuntu-kunai-test ubuntu:latest ls -hail",
    "exe": {
      "path": "/usr/bin/sudo"
    },
    "path": "/run/sudo/ts/1000"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 81,
      "name": "read",
      "uuid": "f7f6ce71-325a-9708-4363-97c413bffa28",
      "batch": 604
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:57.957950584Z"
  }
}
```

