---
sidebar_position: 62
---

# Send data

This events gets generated when data is sent to a remote IP address.

:::tip
* `.data.dst.hostname` is a correlated field from a previous [dns_query](dns_query) event
* `.data.data_entropy` gives you **an estimate** of the entropy of the data sent. This can be used to identify **high entropy** (i.e. compressed, encrypted) communications.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "file": "/usr/bin/curl"
    },
    "dst": {
      "hostname": "0xrawsec.github.io",
      "ip": "185.199.111.153",
      "port": 443,
      "public": true,
      "is_v6": false
    },
    "data_entropy": 4.496214,
    "data_size": 517
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 62,
      "name": "send_data",
      "uuid": "5bdb7056-cad6-82d3-7c72-fd9c86631b53",
      "batch": 68
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.241076068Z"
  }
}
```
