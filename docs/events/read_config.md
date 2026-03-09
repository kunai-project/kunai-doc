---
sidebar_position: 82
---

# Read Config

This file is generated whenever a file located in `/etc` is being **read**.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "sudo rm /etc/kunai_test.conf",
    "exe": {
      "path": "/usr/bin/sudo"
    },
    "path": "/etc/passwd"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 82,
      "name": "read_config",
      "uuid": "16aa78c6-efb5-6276-b24d-911a1c5d7f32",
      "batch": 878
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.475065013Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `read_config` event is crucial for:

1. **Configuration Monitoring**: Tracks when configuration files in `/etc` are accessed, providing visibility into system configuration reads.
1. **Security Monitoring**: Detects unauthorized access to sensitive configuration files that may indicate reconnaissance or credential harvesting.
1. **Forensic Analysis**: Establishes timelines of configuration file access for incident investigation and understanding attack patterns.

:::tip
This event specifically monitors reads of files in the `/etc` directory, which typically contains system configuration files, user information, and other sensitive data.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that read the configuration file.

#### `.data.command_line`

- The command line of the process that read the configuration file.

#### `.data.exe.path`

- The path to the executable that read the configuration file.

#### `.data.path`

- The full path to the configuration file that was read.
