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
    "connected": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 60,
      "name": "connect",
      "uuid": "cd457e28-5cbb-0e98-0a9b-c972082bc007",
      "batch": 67
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:23.241036358Z"
  }
}
```
