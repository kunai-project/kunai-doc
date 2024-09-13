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
      "file": "/usr/bin/curl"
    },
    "query": "0xrawsec.github.io",
    "proto": "udp",
    "response": "185.199.111.153;185.199.110.153;185.199.109.153;185.199.108.153",
    "dns_server": {
      "ip": "192.168.1.1",
      "port": 53,
      "public": false,
      "is_v6": false
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 61,
      "name": "dns_query",
      "uuid": "6c106f3d-cf35-8e27-2f21-24ff6e505fae",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.240891687Z"
  }
}
```

