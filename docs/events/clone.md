---
sidebar_position: 6
---

# Clone

A task is being cloned/forked. This means that a new task will be created
on the system.

:::tip new task
* The information related to the new task will appear under the `.info.task` 
section of this event.
* If there is not `execve`, the executable of the task remains the same
:::

```json
{
  "data": {
    "exe": "/usr/bin/bash",
    "command_line": "bash",
    // flags passed to the clone familly syscalls
    "flags": "0x01200000"
  },
  "info": {
    ...
    "task": {
      "name": "bash",
      // pid of the new task
      "pid": 3119,
      // tgid of the new task
      "tgid": 3119,
      // guuid of the new task
      "guuid": "345db7a0-5236-0000-fd99-a1192f0c0000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026531840
      }
    },
    ...
    "event": {
        ...
        "id": 6,
        "name": "clone",
        ...
    },
    ...
  }
}

```