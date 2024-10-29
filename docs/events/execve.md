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
    "ancestors": "kernel|kernel",
    "parent_exe": "kernel",
    "command_line": "/sbin/modprobe -q -- net-pf-10",
    "exe": {
      "path": "/usr/bin/kmod",
      "md5": "08220eec2f1a1f3690a2d6b2a634d255",
      "sha1": "4dd4f7a269c9d18d755176bcf44bcef86abe2633",
      "sha256": "cc064683b03c958347f2a7d13ee9d4523434674e2599c2ca710f923dc44b0a5b",
      "sha512": "87d3057d6881b5256bf1ae93386d9b615f1afe11c3c90ae2e71eb68d9cf4f550205135ffd5cf24ca6fa72e08edf56110bd70a9ca5c5448283b5939384ff64813",
      "size": 166080,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "e97b8ca5-f6bd-c206-afbd-701c0d61a9d9",
      "batch": 605
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.834535124Z"
  }
}
```