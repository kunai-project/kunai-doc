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
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "path": "/usr/bin/curl"
    },
    "socket": {
      "domain": "AF_INET",
      "type": "SOCK_DGRAM",
      "proto": "UDP"
    },
    "src": {
      "ip": "192.168.1.152",
      "port": 13267
    },
    "query": "kunai-project.github.io",
    "response": "185.199.110.153;185.199.111.153;185.199.109.153;185.199.108.153",
    "dns_server": {
      "ip": "192.168.1.1",
      "port": 53,
      "public": false,
      "is_v6": false
    },
    "community_id": "1:XT9OMvFiajrWmMOXr4N3TI+3Etc="
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 61,
      "name": "dns_query",
      "uuid": "ecc87c39-8da3-0b9d-4060-480fdef2efd7",
      "batch": 878
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.470834988Z"
  }
}
```


