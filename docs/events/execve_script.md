---
sidebar_position: 2
---

# Execve Script

This event is generated when a script or binary is executed using the `execve` family of system calls. The `execve_script` event is a specialized form of the `execve` event, focusing on the execution of script files and binaries. This event is essential for monitoring script and binary executions, which are often used in automation, system administration, and various other tasks.

## Example JSON

Below is a sample JSON payload for an `execve_script` event:

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "parent_command_line": "/bin/bash generate-activity.sh",
    "parent_exe": "/usr/bin/bash",
    "command_line": "/bin/bash /tmp/tmp.KsA9Ym95fq_kunai_test.sh",
    "exe": {
      "path": "/tmp/tmp.KsA9Ym95fq_kunai_test.sh",
      "md5": "64b8185d28042ea96feb251e12fe632b",
      "sha1": "31683c67b020d90f02a42e43e7758184ef98c12f",
      "sha256": "cda81b42b75647daf6b70a626380c199fe665d721e63bfe34c96b65da0289627",
      "sha512": "63165b902db5242a01296b39c1d6f2995fde961e29d9470d1862ccde8e2c8a3083659bf5d9c0794bbca620f37c419baec3c1d1941333d37fb9ced795553d2e83",
      "size": 21,
      "error": null
    },
    "interpreter": {
      "path": "/usr/bin/bash",
      "md5": "efe8524ed6a94d298fdde8da1fa6aaed",
      "sha1": "f891da1be80c1496a8ec9898816bb9fce9ad0d45",
      "sha256": "68bac453a428796f18114a1bf43420d814e36555808ec98eacb782de565c06eb",
      "sha512": "6cf198485bbcb55b32fec4ffa6798abcb6b7a7c5bb8ff9450a09bb5f022fabbf0a6f547b661abe1c06eb80bcbc0a5f5265bf166122856d86c06ee5f0f69e4a8f",
      "size": 1100632,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 2,
      "name": "execve_script",
      "uuid": "17c4ad2a-8b95-24af-c484-541a5a4e971e",
      "batch": 720
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-06-10T14:00:30.925394727Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `execve_script` event is significant for several reasons:

1. **Script and Binary Monitoring**: It provides visibility into script and binary executions, which are often used for automation and system administration tasks.
2. **Security**: Monitoring script and binary executions can help detect unauthorized or malicious executions, which is critical for maintaining system security.
3. **Behavioral Analysis**: Understanding the command-line arguments and the interpreter used for scripts and binaries helps in analyzing system behavior and detecting anomalies.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors.

#### `.data.parent_command_line`

- The command line used to start the parent process.

#### `.data.parent_exe`

- The path to the executable of the parent process.

#### `.data.command_line`

- The command line used to start the current script or binary.

#### `.data.exe.path`

- The path to the script or binary being executed.

#### `.data.exe.md5`

- The MD5 hash of the script or binary file.

#### `.data.exe.sha1`

- The SHA1 hash of the script or binary file.

#### `.data.exe.sha256`

- The SHA256 hash of the script or binary file.

#### `.data.exe.sha512`

- The SHA512 hash of the script or binary file.

#### `.data.exe.size`

- The size of the script or binary file in bytes.

#### `.data.exe.error`

- Any error associated with the script or binary file, if applicable.

#### `.data.interpreter.path`

- The path to the interpreter used to execute the script or binary.

#### `.data.interpreter.md5`

- The MD5 hash of the interpreter file.

#### `.data.interpreter.sha1`

- The SHA1 hash of the interpreter file.

#### `.data.interpreter.sha256`

- The SHA256 hash of the interpreter file.

#### `.data.interpreter.sha512`

- The SHA512 hash of the interpreter file.

#### `.data.interpreter.size`

- The size of the interpreter file in bytes.

#### `.data.interpreter.error`

- Any error associated with the interpreter file, if applicable.

:::tip
The `interpreter` field provides details about the interpreter used to execute the script or binary, which can be crucial for understanding the execution environment and potential security implications.
:::
