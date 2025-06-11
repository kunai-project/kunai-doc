---
sidebar_position: 1
---

# Execve

This event is generated when a new process is created using one of the `execve` system calls. `execve` system calls are used to execute a program within the context of an existing process, replacing the current process image with a new one. This event is crucial for monitoring process execution and understanding the lineage and behavior of processes on a Linux system.

## Example JSON

Below is a sample JSON payload for an `execve` event:

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/timeout|/usr/bin/bash",
    "parent_command_line": "bash -ec \"trash=/tmp/trash; mkdir -p $trash; while [ true ]; do t=$(mktemp -d -p $trash); for i in {0..100000}; do echo \\\"AHHHH\\\" > $t/test$i.txt; done && rm -rf $t; done\"",
    "parent_exe": "/usr/bin/bash",
    "command_line": "mktemp -d -p /tmp/trash",
    "exe": {
      "path": "/usr/bin/mktemp",
      "md5": "0d7660dac3bffd6b76d3054da0fa1216",
      "sha1": "817329148a765bc2dc82baa230638d1987d7a284",
      "sha256": "f32938cf25ddd6f6800a8e9b406595534d0eb27993587bbdeee2e83dd97d8406",
      "sha512": "22d716d4e16492928ec90380d8c6d4749a0082ffa04630355a1d9a59bd3d196e83169223354a1edd28c5bbec137da96ccc6f42558e30cfe2a4d456a0b4c50fba",
      "size": 39144,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "b8e4bb6c-6048-b9e9-6c50-514888182958",
      "batch": 922
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-06-10T14:00:42.814301638Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `execve` event is significant for several reasons:

1. **Process Monitoring**: It provides visibility into process creation and execution, which is essential for security monitoring and incident response.
2. **Behavioral Analysis**: Understanding the lineage and command-line arguments of processes helps in analyzing system behavior and detecting anomalies.
3. **Security**: Monitoring `execve` events can help detect unauthorized or malicious process executions, which is critical for maintaining system security.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors.

#### `.data.parent_command_line`

- The command line used to start the parent process.

#### `.data.parent_exe`

- The path to the executable of the parent process.

#### `.data.command_line`

- The command line used to start the current process.

#### `.data.exe.path`

- The path to the executable being run.

#### `.data.exe.md5`

- The MD5 hash of the executable file.

#### `.data.exe.sha1`

- The SHA1 hash of the executable file.

#### `.data.exe.sha256`

- The SHA256 hash of the executable file.

#### `.data.exe.sha512`

- The SHA512 hash of the executable file.

#### `.data.exe.size`

- The size of the executable file in bytes.

#### `.data.exe.error`

- Any error associated with the executable file, if applicable.

:::tip
The `ancestors` field provides a complete lineage of the process, which can be crucial for tracing the origin and understanding the context of process execution.
:::