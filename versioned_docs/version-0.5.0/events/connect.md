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
    "command_line": "curl -d RCKhLa0Ka70LTYgF4eJiQkAspo9Yevj3dMjuSc0NwpOauPicV3P4bajH1paLQMvYGIILwrHk3cpxgS4FDVAUn5XiT0ucGNoVYd2FAjg6hP1zXSH9KCKJhB3ixUq8APtqSJ1DPVYGPOSyCIaHb9Nh4QOJe0UiYjogNoiFBRYVIL8hFgI607LW0MVxcTQqPdX9Utuw9MXxyEaN6TVcFWmKAxrV5BsgP9YYeXyWwda62Kg5aqsq2cdPy9jm9s6S6Brr https://why.kunai.rocks",
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
      "port": 36749
    },
    "dst": {
      "hostname": "kunai-project.github.io",
      "ip": "185.199.111.153",
      "port": 443,
      "public": true,
      "is_v6": false
    },
    "community_id": "1:Zy0KM8lSsDjFs4mzmfFHjtBZfPI=",
    "connected": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 60,
      "name": "connect",
      "uuid": "6c1ab8dc-3e55-cdc9-12ea-b14d15366dba",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.472813816Z"
  }
}
```
