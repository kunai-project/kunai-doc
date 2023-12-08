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
    ...
    "event": {
        ...
        "id": 5,
        "name": "exit_group",
        ...
    },
    ...
  }
}
```
