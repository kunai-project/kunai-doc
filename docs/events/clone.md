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
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "/usr/lib/systemd/systemd-udevd",
    "exe": {
      "path": "/usr/bin/udevadm"
    },
    "flags": "0x1200000"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 6,
      "name": "clone",
      "uuid": "ccd9e8fa-5684-b753-ce65-5527157b33f7",
      "batch": 605
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.259432812Z"
  }
}
```
