---
sidebar_position: 21
---

# Bpf prog load

This **event** is generated every time a BPF program is loaded into the kernel.

:::info
Some fields might set to `null`, this is when the information is not available for the current **kernel**.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo|/usr/bin/timeout",
    "command_line": "./target/x86_64-unknown-linux-musl/release/kunai",
    "exe": {
      "file": "/home/kunai/target/x86_64-unknown-linux-musl/release/kunai"
    },
    "id": 3867,
    "prog_type": {
      "id": 2,
      "name": "kprobe"
    },
    "tag": "1cf73c91aee8b608",
    "attached_func": "",
    "name": "clone.enter.sec",
    "ksym": "bpf_prog_1cf73c91aee8b608_security_task_alloc",
    "bpf_prog": {
      "md5": "78bd0ea87eb4d7d119d3b27b8c762af0",
      "sha1": "15935e96d83f2ad5ad588fd746387c0905aaf918",
      "sha256": "8ff6eaea0c4fd5dea0cc97c7a326dfac68c8db324bc2b6c421b991a408041444",
      "sha512": "dd4206aa65c5ec841be4c53f9af572471580d72c552ff40bfab308fa5767bc24814681541060ac0b0c3351036cc9bcc0c40ba4b577d1ff426d525bd0bcb8b346",
      "size": 15096
    },
    "verified_insns": 74814,
    "loaded": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 21,
      "name": "bpf_prog_load",
      "uuid": "40bfeefc-b429-0411-6286-1ceb5ea630b5",
      "batch": 38
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:18.287709663Z"
  }
}
```
