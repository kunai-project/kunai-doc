---
sidebar_position: 87
---

# Write and close

An event generated when a file that has been **written** is just being **closed**. This is a great hook event to trigger a **file scan** as the file is not supposed to be **written** again.

:::caution
This event is different from [`write`](../events/write) event. `write` events gets generated **only once per couple (task, file)** and **as soon as** the file receive its first **write** operation.
:::

:::danger
If you decide to enable these events (disabled by default), please be aware that there will be a large number of them. Make sure you have read the [configuration section](../configuration.md).
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "command_line": "/bin/bash ./generate-activity.sh",
    "exe": {
      "path": "/usr/bin/bash"
    },
    "path": "/tmp/tmp.URdsDAjMAu_kunai_test.sh"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 87,
      "name": "write_and_close",
      "uuid": "1346aa39-8ebd-5cd6-966e-f8ff9cd91fdd",
      "batch": 606
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.845148406Z"
  }
}
```
