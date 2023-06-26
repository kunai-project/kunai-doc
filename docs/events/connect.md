---
sidebar_position: 60
---

# Connect

This event gets generated every time a **connect** attempt is made to a remote IP.

:::tip hostname correlation
If available `dst.hostname` fields gets correlated with a previous [dns_query events](dns_query) event
:::


```json
{
  "data": {
    "command_line": "(snapd)",
    "exe": "/lib/systemd/systemd",
    "dst": {
      "hostname": "api.snapcraft.io",
      "ip": "185.125.188.54",
      "port": 0,
      "public": true,
      "is_v6": false
    },
    "connected": true
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 60,
      "name": "connect",
      "uuid": "37ee6c9e-880d-ce6f-b66f-e080c4a8f5dc",
      "batch": 23242
    },
    "task": {
      "name": "snapd",
      "pid": 4673,
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
    "utc_time": "2023-06-26T07:13:02.864822511Z"
  }
}
```
