---
sidebar_position: 61
---

# Dns query

This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS resolver.

:::info
This event will be generated only for DNS over **UDP/53** or **TCP/53**
:::

:::caution
The code responsible of generating this event is one of the most complex so it is possible that some edge cases might not generate the expected event. If that is your case, open an issue, we will work on it.
:::

```json
{
  "data": {
    "command_line": "lxd --logfile /var/snap/lxd/common/lxd/logs/lxd.log --group lxd",
    "exe": "/snap/lxd/24061/bin/lxd",
    "query": "cloud-images.ubuntu.com",
    "proto": "udp",
    "response": "2620:2d:4000:1::17;2620:2d:4000:1::1a",
    "dns_server": {
      "ip": "127.0.0.53",
      "port": 53,
      "public": true
    }
  },
  "info": {
    ...
    "event": {
        ...
        "id": 61,
        "name": "dns_query",
        ...
    },
    ...
  }
}
```
