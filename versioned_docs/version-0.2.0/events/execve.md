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
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh",
    "parent_exe": "/usr/bin/zsh",
    "command_line": "git rev-parse --quiet --verify HEAD",
    "exe": {
      "file": "/usr/bin/git",
      "md5": "7df180fdcbd91f2d5e119ad4eca85d38",
      "sha1": "a90827d841b5a33703227764e2f62a487cc9cbf3",
      "sha256": "30eccaee4cda7ed541c143bf73c3fd1266a8a17302dc362da487be72f5ac3500",
      "sha512": "dde3c20e7974234ecee33759574706ef5644d12b363a29d090984d1ce09ca246e27c8e7496d67c035d6817f8a3c2665cffbff26904bd9283cf5abb08ff888dff",
      "size": 4180608
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "88780e39-3308-e9a9-3f23-5c69475b3ccf",
      "batch": 294
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-13T08:35:12.881471231Z"
  }
}
```

