---
sidebar_position: 83
---

# Write

This event gets generated whenever a file is write.

:::info
If consecutive `write` operations are made on the same file, only one event will be generated for a given task.
:::

:::danger
If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the [configuration section](../configuration.md).
:::

```json
{
  "data": {
    "command_line": "lxd --logfile /var/snap/lxd/common/lxd/logs/lxd.log --group lxd",
    "exe": "/snap/lxd/24061/bin/lxd",
    "path": "/var/snap/lxd/common/lxd/images/c533845b5db1747674ee915cbb20df6eb47c953bb7caf1fec5b35ae9ccf98c18.rootfs"
  },
  "info": {
    "host": {
      "hostname": "ubuntu-22-04",
      "container": null
    },
    "event": {
      "id": 83,
      "name": "write",
      "uuid": "550ca4de-aa8c-3aff-e259-e9fa32d5747b",
      "batch": 8820
    },
    "task": {
      "name": "lxd",
      "pid": 1838,
      "tgid": 1533,
      "guuid": "d9fe704a-1800-0000-ba5f-b80efd050000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026532271
      }
    },
    "parent_task": {
      "name": "daemon.start",
      "pid": 1371,
      "tgid": 1371,
      "guuid": "4f62e1da-1700-0000-ba5f-b80e5b050000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026532271
      }
    },
    "utc_time": "2023-06-26T07:12:22.507142790Z"
  }
}
```
