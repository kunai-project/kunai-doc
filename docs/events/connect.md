---
sidebar_position: 60
---

# Connect

This event gets generated every time a **connect** attempt is made to a remote IP.

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

## Additional Details

### Why This Event Matters

The `connect` event is crucial for:

1. **Network Monitoring**: Tracks outbound network connections, providing visibility into which processes are communicating with external systems.
1. **Security Monitoring**: Detects unauthorized or suspicious network connections that may indicate malware, data exfiltration, or command-and-control communication.
1. **Threat Detection**: Identifies connections to known malicious IPs or unusual destinations that may indicate compromise.

:::tip
* The `.data.dst.hostname` field is correlated with [DNS query events](dns_query), providing both IP and domain name information. 
* The `.data.community_id` field enables correlation with other security tools using the same community ID standard.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that initiated the connection.

#### `.data.command_line`

- The command line of the process that initiated the connection.

#### `.data.exe.path`

- The path to the executable that initiated the connection.

#### `.data.socket`

- Information about the socket including domain (AF_INET/AF_INET6), type, and protocol.

#### `.data.src`

- Source IP address and port of the connection.

#### `.data.dst`

- Destination information including hostname (if available), IP address, port, and whether it's a public IP.

#### `.data.community_id`

- A community ID for correlation with other security tools.

#### `.data.connected`

- Boolean indicating whether the connection was successfully established.
