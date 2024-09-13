---
sidebar_position: 40
---

# Mprotect exec

This kind of event is generated when memory protection is turned to **executable**.

:::info
For some processes, those using JIT compilers, it is legit to generate a lot of mprotect_exec events.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "/tmp/tmp.TWXtUrEenk_kunai_test.c.out",
    "exe": {
      "file": "/tmp/tmp.TWXtUrEenk_kunai_test.c.out"
    },
    "addr": "0x70080321a000",
    "prot": "0x5"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 40,
      "name": "mprotect_exec",
      "uuid": "0b4824bd-2a3e-15df-1142-4df7f2d718ca",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.238859965Z"
  }
}
```

