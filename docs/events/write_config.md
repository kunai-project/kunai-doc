---
sidebar_position: 84
---

# Write Config

This file is generated whenever a file located in `/etc` is being **written**.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo",
    "command_line": "tee /etc/kunai_test.conf",
    "exe": {
      "path": "/usr/bin/tee"
    },
    "path": "/etc/kunai_test.conf"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 84,
      "name": "write_config",
      "uuid": "4903ced0-5bad-c3db-9325-5ea6a6c4da90",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.474792288Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `write_config` event is crucial for:

1. **Configuration Monitoring**: Tracks when configuration files in `/etc` are modified, providing visibility into system configuration changes.
1. **Security Monitoring**: Detects unauthorized modifications to sensitive configuration files that may indicate persistence mechanisms or system compromise.
1. **Forensic Analysis**: Establishes timelines of configuration file modifications for incident investigation and understanding attack patterns.

:::tip
This event specifically monitors writes to files in the `/etc` directory, which typically contains system configuration files. Unauthorized changes to these files can indicate system compromise or persistence mechanisms.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that wrote to the configuration file.

#### `.data.command_line`

- The command line of the process that wrote to the configuration file.

#### `.data.exe.path`

- The path to the executable that wrote to the configuration file.

#### `.data.path`

- The full path to the configuration file that was written.
