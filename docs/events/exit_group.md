---
sidebar_position: 5
---

# Exit group

Event generated when a thread-group (process and all its threads) exits.

```json
{
  "data": {
    "command_line": "/sbin/apparmor_parser --write-cache --replace --cache-loc=/etc/apparmor.d/cache -- /etc/apparmor.d/lxc-containers",
    "exe": "/sbin/apparmor_parser",
    "error_code": 18446650047273402000
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 5,
      "name": "exit_group",
      "uuid": "7d3e98cb-0486-01ff-0c17-38ab62e2c58f",
      "batch": 22204
    },
    "task": {
      "name": "apparmor_parser",
      "pid": 4376,
      "tgid": 4376,
      "guuid": "024bfbac-7300-0000-ba5f-b80e18110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "parent_task": {
      "name": "apparmor_parser",
      "pid": 4371,
      "tgid": 4371,
      "guuid": "b5a1e7ab-7300-0000-ba5f-b80e13110000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532389
      }
    },
    "utc_time": "2023-06-26T07:12:56.275667953Z"
  }
}
```
