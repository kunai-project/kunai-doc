---
sidebar_position: 87
---

# Write and Close

An event generated when a file that has been **written** is just being **closed**.

:::tip
This event is particularly useful for triggering file scans because it occurs when a file is completely written and closed, ensuring the file content is finalized and ready for analysis.
:::

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
      "name": "write_close",
      "uuid": "1346aa39-8ebd-5cd6-966e-f8ff9cd91fdd",
      "batch": 606
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.845148406Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `write_close` event is crucial for:

1. **File Monitoring**: Tracks when files are written and then closed, providing visibility into file modification patterns.
1. **Security Monitoring**: Detects suspicious file modification that may indicate malware installation.
1. **File Integrity**: Provides ideal timing for file scanning since the file is complete and won't be modified further.
1. **Forensic Analysis**: Establishes timelines of file modifications for incident investigation and understanding attack patterns.


### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that wrote and closed the file.

#### `.data.command_line`

- The command line of the process that wrote and closed the file.

#### `.data.exe.path`

- The path to the executable that wrote and closed the file.

#### `.data.path`

- The full path to the file that was written and closed.
