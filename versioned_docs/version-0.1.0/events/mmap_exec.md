---
sidebar_position: 41
---

# Mmap exec

This events is generated whenever the `mmap` syscall is used to map an executable file in memory, with memory execution protection.

:::info
This will event will **catch only** shared-objects loaded with the common loading process using `mmap` syscall. Any custom loader, especially the ones used to bypass such monitoring, will not generate such an event. [Mprotect exec events](mprotect_exec) might help you catching suspicious loaders.
:::

```json
{
  "data": {
    "command_line": "(rsyslogd)",
    "exe": "/lib/systemd/systemd",
    // information about mmapped executable
    "mapped": {
      // file being mmapped
      "file": "/lib/x86_64-linux-gnu/libnss_systemd.so.2",
      // metadata
      "md5": "a551d4bc40075d43bcd62dfc3d0eb321",
      "sha1": "d929a47d74ef49e0f3a58681dea800f4bb9faac4",
      "sha256": "8d7a135968d451205575e2772e5025a3627dc06b68ea2b2f6d53b3975bc0f015",
      "sha512": "a7fd19c60db2cfc7bf46092aaf7c4ca6351e2720ea1291187b1e5e9b1dcf22e7b56e246ae4ae2d9eadd9ac9e409787cac91a536fdb0fe992d3de934417d6eec5",
      "size": 253944
    }
  },
  "info": {
    ...
    "event": {
        ...
        "id": 41,
        "name": "mmap_exec",
        ...
    },
    ...
  }
}
```
