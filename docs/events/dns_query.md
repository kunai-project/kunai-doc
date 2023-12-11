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
    "command_line": "/usr/lib/firefox/firefox --private-window https://github.com",
    "exe": "/usr/lib/firefox/firefox",
    "query": "live.github.com",
    "proto": "udp",
    "response": "140.82.114.25",
    "dns_server": {
      "ip": "192.168.1.1",
      "port": 53,
      "public": false,
      "is_v6": false
    }
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 61,
      "name": "dns_query",
      "uuid": "c8e6e73a-737c-bd07-d140-ac8d3477b08c",
      "batch": 14
    },
    ...
}
```
