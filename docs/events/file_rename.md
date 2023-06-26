---
sidebar_position: 85
---

# File rename

This event gets generated whenever a file is being renamed.

```json
{
  "data": {
    "command_line": "(snapd)",
    "exe": "/lib/systemd/systemd",
    "old": "/var/cache/snapd/names.phXLpRTKs1Bb~",
    "new": "/var/cache/snapd/names"
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 85,
      "name": "file_rename",
      "uuid": "3edcc653-aab4-011a-368a-c48fe7382bef",
      "batch": 26147
    },
    "task": {
      "name": "snapd",
      "pid": 4714,
      "tgid": 4636,
      "guuid": "27efe80d-7500-0000-ba5f-b80e1c120000",
      "uid": 1000000,
      "gid": 1000000,
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
    "utc_time": "2023-06-26T07:13:03.894139123Z"
  }
}
```
