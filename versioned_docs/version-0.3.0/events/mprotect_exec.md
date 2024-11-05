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
    "command_line": "/tmp/tmp.UjIedg3IHI_kunai_test.c.out",
    "exe": {
      "path": "/tmp/tmp.UjIedg3IHI_kunai_test.c.out"
    },
    "addr": "0x776a2f572000",
    "prot": "0x5"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 40,
      "name": "mprotect_exec",
      "uuid": "1bc9874b-500c-7c7e-ad64-f14a608cbc58",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.469448415Z"
  }
}
```


