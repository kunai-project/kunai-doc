---
sidebar_position: 22
---

# Bpf Socket Filter Attached

A socket filter attachement has been made (for instance via [getsockopt](https://man7.org/linux/man-pages/man2/getsockopt.2.html) syscall).

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo|/usr/bin/timeout",
    "command_line": "tcpdump tcp port 42",
    "exe": {
      "file": "/usr/bin/tcpdump"
    },
    "socket": {
      "domain": "AF_PACKET",
      "type": "SOCK_RAW"
    },
    "filter": {
      "md5": "7ddd6ba02e7f614ba3bf42f98c81bb10",
      "sha1": "100cb90ce07bdeabecaac7514edab7ecfe17c975",
      "sha256": "a8fb8cc25be2861d14e5c82c034f0670ce58c7874cce6b5492075285cfcf359d",
      "sha512": "2003ec68df6185ace3e092e43cd0881d2f3266ff6ac36f83287a8e37cad92c4d36cd0b97775444f9a8966f505e6091e83898547b6a6a9ee5c5f389944c25bfd4",
      "len": 20,
      "size": 160
    },
    "attached": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 22,
      "name": "bpf_socket_filter",
      "uuid": "4c4e4273-d4eb-3405-19c2-cd02d6125f2d",
      "batch": 50
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-12T21:58:20.898903796Z"
  }
}
```

:::info

* `.data.filter.len` is the length of the filter **in number of BPF instructions**
* `.data.filter.size` is the size of the filter **in bytes**
:::