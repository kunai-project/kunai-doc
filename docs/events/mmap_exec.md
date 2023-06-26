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
    "mapped": {
      "file": "/lib/x86_64-linux-gnu/libnss_systemd.so.2",
      "md5": "a551d4bc40075d43bcd62dfc3d0eb321",
      "sha1": "d929a47d74ef49e0f3a58681dea800f4bb9faac4",
      "sha256": "8d7a135968d451205575e2772e5025a3627dc06b68ea2b2f6d53b3975bc0f015",
      "sha512": "a7fd19c60db2cfc7bf46092aaf7c4ca6351e2720ea1291187b1e5e9b1dcf22e7b56e246ae4ae2d9eadd9ac9e409787cac91a536fdb0fe992d3de934417d6eec5",
      "size": 253944
    }
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 41,
      "name": "mmap_exec",
      "uuid": "c8818a5a-70d1-0cb3-5c23-5e28eff3f5e7",
      "batch": 22991
    },
    "task": {
      "name": "rsyslogd",
      "pid": 4625,
      "tgid": 4625,
      "guuid": "e059330b-7500-0000-ba5f-b80e11120000",
      "uid": 1000000,
      "gid": 1000106,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "parent_task": {
      "name": "systemd",
      "pid": 4154,
      "tgid": 4154,
      "guuid": "13729d78-7300-0000-ba5f-b80e3a100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "utc_time": "2023-06-26T07:13:01.112765547Z"
  }
}
```
