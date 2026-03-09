---
sidebar_position: 62
---

# Send Data

This events gets generated when data is sent to a remote IP address.

:::tip
* `.data.dst.hostname` is a correlated field from a previous [dns_query](dns_query) event
* `.data.data_entropy` field provides an **estimate** of the entropy of the sent data, which can help identify encrypted or compressed traffic. High entropy values may indicate encrypted communications, while low entropy may suggest plaintext data
:::

:::tip detection idea
This event can be used to spot executables sending data over the network while they are not supposed to.
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
      "type": "SOCK_STREAM",
      "proto": "TCP"
    },
    "src": {
      "ip": "192.168.1.152",
      "port": 19656
    },
    "dst": {
      "hostname": "kunai-project.github.io",
      "ip": "185.199.110.153",
      "port": 443,
      "public": true,
      "is_v6": false
    },
    "community_id": "1:uusXTSRjL/83fb1xfxEtd+dKM3M=",
    "data_entropy": 4.543225,
    "data_size": 517
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 62,
      "name": "send_data",
      "uuid": "4190e662-694e-c972-0747-37d01475598c",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.470966564Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `send_data` event is crucial for:

1. **Network Monitoring**: Tracks when processes send data over the network, providing visibility into outbound communications.
1. **Security Monitoring**: Detects unauthorized data exfiltration, command-and-control communications, or suspicious network activity.
1. **Forensic Analysis**: Provides detailed information about network communications including entropy analysis for incident investigation.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that sent the data.

#### `.data.command_line`

- The command line of the process that sent the data.

#### `.data.exe.path`

- The path to the executable that sent the data.

#### `.data.socket`

- Information about the socket including domain, type, and protocol.

#### `.data.src`

- Source IP address and port of the connection.

#### `.data.dst`

- Destination information including hostname (if available), IP address, port, and whether it's a public IP.

#### `.data.community_id`

- A community ID for correlation with other security tools.

#### `.data.data_entropy`

- An estimate of the entropy of the sent data, useful for identifying encrypted or compressed traffic.

#### `.data.data_size`

- The size of the data sent in bytes.
