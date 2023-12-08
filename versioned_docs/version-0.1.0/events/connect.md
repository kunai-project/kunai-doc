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
    ...
    "event": {
        ...
        "id": 60,
        "name": "connect",
        ...
    },
    ...
  }
}
```
