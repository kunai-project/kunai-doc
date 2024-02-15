---
sidebar_position: 7
---

# Prctl

A `prctl` event is generated when a process makes a call to the [`prctl`](https://man7.org/linux/man-pages/man2/prctl.2.html) **syscall**. As you can
read in the man page, this syscall can be used to achieve a wide range of
operations. Some of them might be considered as malicious, depending on 
the context.

:::tip
* `.data.option`: the first argument to prctl syscall
  * if option is `PR_SET_NAME` the new task name can be obtained in `.info.task.name`
* `.data.arg[2-5]`: others arguments to prctl, their meaning depends on option
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",
    "command_line": "(udev-worker)",
    "exe": {
      "file": "/usr/bin/udevadm"
    },
    "option": "PR_SET_NAME",
    "arg2": "0x60c410102419",
    "arg3": "0x60c410102419",
    "arg4": "0x0",
    "arg5": "0x0",
    "success": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 7,
      "name": "prctl",
      "uuid": "d851a1d4-4edc-fcda-e4e0-a96a9fecc2ef",
      "batch": 32
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-13T08:34:29.318028196Z"
  }
}
```
