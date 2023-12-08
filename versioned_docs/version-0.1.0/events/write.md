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
    ...
    "event": {
        ...
        "id": 83,
        "name": "write",
        ...
    },
    ...
  }
}
```
