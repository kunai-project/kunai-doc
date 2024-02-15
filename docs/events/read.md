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
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh",
    "command_line": "git diff --no-ext-diff --ignore-submodules=dirty --quiet --exit-code",
    "exe": {
      "file": "/usr/bin/git"
    },
    "path": "/usr/lib/libz.so.1.3.1"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 81,
      "name": "read",
      "uuid": "902d47f1-dd0b-0313-582b-2083ba0fee1c",
      "batch": 65
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:22.097038200Z"
  }
}
```
