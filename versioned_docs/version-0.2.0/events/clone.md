---
sidebar_position: 6
---

# Clone

A task is being cloned/forked. This means that a new task will be created
on the system.

:::tip new task
* The information related to the **new task** (i.e. cloned/forked) will appear under the `.info.task` 
section of this event.
* If there is not `execve` following, the executable of the task remains the same
* `.data.flags` is the **flags mask** (c.f. [manual](https://www.man7.org/linux/man-pages/man2/clone.2.html)) passed to `clone`
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt",
    "command_line": "zsh",
    "exe": {
      "file": "/usr/bin/zsh"
    },
    "flags": "0x1200000"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 6,
      "name": "clone",
      "uuid": "ecccb270-b631-84e6-f23a-5b31696e1792",
      "batch": 276
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-13T08:35:10.801423351Z"
  }
}
```