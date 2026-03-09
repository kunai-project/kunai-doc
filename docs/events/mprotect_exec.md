---
sidebar_position: 40
---

# Mprotect Exec

This kind of event is generated when memory protection is turned to **executable**.

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

## Additional Details

### Why This Event Matters

The `mprotect_exec` event is crucial for:

1. **Memory Security**: Tracks when memory regions are made executable, which is a common technique used by malware and shellcode.
1. **Code Injection Detection**: Identifies suspicious memory protection changes that may indicate code injection attacks.

:::tip
This event is particularly important for security monitoring as making memory executable is a key step in many exploitation techniques. However, some legitimate applications (like JIT compilers) generate many such events.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that changed memory protection.

#### `.data.command_line`

- The command line of the process that changed memory protection.

#### `.data.exe.path`

- The path to the executable that changed memory protection.

#### `.data.addr`

- The memory address where protection was changed to executable.

#### `.data.prot`

- The new protection flags applied to the memory region (0x5 typically means PROT_READ | PROT_EXEC).
