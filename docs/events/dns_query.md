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
    "host": {
      "hostname": "ubuntu-22-04",
      "container": null
    },
    "event": {
      "id": 61,
      "name": "dns_query",
      "uuid": "8933709b-f427-ceb9-a3fa-a9b389ddb432",
      "batch": 585
    },
    "task": {
      "name": "lxd",
      "pid": 1790,
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
    "utc_time": "2023-06-26T07:12:08.679070758Z"
  }
}
```
