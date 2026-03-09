---
sidebar_position: 41
---

# Mmap Exec

This events is generated whenever the `mmap` syscall is used to map an executable file in memory, with memory execution protection.

:::info
This will event will **catch only** shared-objects loaded with the common loading process using `mmap` syscall. Any custom loader, especially the ones used to bypass such monitoring, will not generate such an event. [Mprotect exec events](mprotect_exec) might help you catching suspicious loaders.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "path": "/usr/bin/curl"
    },
    "mapped": {
      "path": "/usr/lib/libidn2.so.0.4.0",
      "magic": "ELF 64-bit LSB shared object, x86-64, version 1 (SYSV)",
      "md5": "73ac33824dd8f1814cfea858d8e89d97",
      "sha1": "0c0b9543ee6fc98eb9781f15c4827e09013b9621",
      "sha256": "96ec3ce438fecf2f6388b4c43d3fb4da3030858184eb2ba47c7f1960c8d70ec4",
      "sha512": "7408d893e6a7675d13434c8f612173c54d13e3cdad58d27ceb36f1fc7e23ff2eaddb81d720aa9434e25a4cb68ef4e079b33a4dfd2d079d62a50c6769a6a179df",
      "size": 132992,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 41,
      "name": "mmap_exec",
      "uuid": "8df3b627-afe4-0014-496b-17390a6948c0",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.469749874Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `mmap_exec` event is crucial for:

1. **Memory Monitoring**: Tracks when executable files are mapped into memory with execute permissions, which is essential for detecting code injection and memory-based attacks.
2. **Library Loading**: Monitors shared library loading, helping identify unusual or unauthorized library usage.
3. **Malware Detection**: Detects suspicious memory mapping patterns that may indicate malware attempting to execute code from memory.
4. **Process Analysis**: Provides insight into the dynamic linking and memory management behavior of processes.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors.

#### `.data.command_line`

- The command line used to start the current process.

#### `.data.exe.path`

- The path to the main executable of the process.

#### `.data.mapped.path`

- The path to the file that was mapped into memory with execute permissions.

#### `.data.mapped.magic`

- The file type identification using libmagic, providing a human-readable description of the mapped file format.

#### `.data.mapped.md5`

- The MD5 hash of the mapped file.

#### `.data.mapped.sha1`

- The SHA1 hash of the mapped file.

#### `.data.mapped.sha256`

- The SHA256 hash of the mapped file.

#### `.data.mapped.sha512`

- The SHA512 hash of the mapped file.

#### `.data.mapped.size`

- The size of the mapped file in bytes.

#### `.data.mapped.error`

- Any error associated with the memory mapping operation.
