---
sidebar_position: 61
---

# Dns Query

This event is generated when a DNS response is received on the host and provides insight into the query, response, and DNS resolver.

:::info
This event will be generated only for DNS over **UDP/53** or **TCP/53**
:::

:::caution
The code responsible for generating this event is one of the most complex, so some edge cases might not generate the expected event. If that is your case, open an issue, we will work on it.
:::



## Example JSON

:::warning
The format of this event changed after `v0.6`. The `response` field is now an array instead of a semicolon-separated string, and a new `query_type` field has been added. Users may need to update their filtering and detection rules to accommodate the new format.
:::

Below is a sample JSON payload for a `dns_query`:

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd",
    "command_line": "/usr/lib/systemd/systemd-resolved",
    "exe": {
      "path": "/usr/lib/systemd/systemd-resolved"
    },
    "socket": {
      "domain": "AF_INET",
      "type": "SOCK_DGRAM",
      "proto": "UDP"
    },
    "src": {
      "ip": "10.1.0.137",
      "port": 50994
    },
    "query": "circl.lu",
    "query_type": "TXT",
    "response": [
      "hqrmw544kfynt5qbmqjyyxdgvkw5sxv7",
      "_oj0a2malkm3jqtrky4varku73yaur4f",
      "v=spf1 mx a:cpb.circl.lu a:cpbb.circl.lu a:mail.mbox.lu a:mail1.mbox.lu a:mail2.mbox.lu ip4:185.194.93.129 ip4:185.194.93.18 ip4:149.13.33.0/25 ip4:185.194.94.153 ip6:2a00:5980::/48 ip4:5.196.95.45 ip4:185.194.93.215  ip6:2001:41d0:a:fe2d::1/128 ~all",
      "google-site-verification=lyDPcsTtOcU4ItMMMbNaZ8Mc_lOvLGwI2kcZCQL_KMU"
    ],
    "dns_server": {
      "ip": "10.7.0.251",
      "port": 53,
      "public": false,
      "is_v6": false
    },
    "community_id": "1:HYaj9zwoLkldwdPgJWzXZQNkvm4="
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 61,
      "name": "dns_query",
      "uuid": "16a4be53-0f94-a143-82b6-05db31322cbb",
      "batch": 8
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2026-03-09T09:53:38.033681058Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `dns_query` event is crucial for:

1. **Network Monitoring**: Tracking DNS queries to detect suspicious or unauthorized domain lookups.
2. **Threat Detection**: Identifying potential malware communications through DNS exfiltration or command-and-control lookups.

:::tip
The `query_type` field indicates the type of DNS record being queried (e.g., A, AAAA, TXT, MX), which helps understand the purpose of the DNS request.
:::

### Key Fields Explained

#### `.data.ancestors`

- The process ancestry chain, showing the parent-child relationship of processes leading to the DNS query.

#### `.data.command_line`

- The full command line that triggered the DNS query.

#### `.data.exe.path`

- The path to the executable that performed the DNS query.

#### `.data.socket`

- Contains socket information including domain (AF_INET/AF_INET6), type (SOCK_DGRAM/SOCK_STREAM), and protocol (UDP/TCP).

#### `.data.src`

- Source IP address and port of the DNS query.

#### `.data.query`

- The domain name being queried.

#### `.data.query_type`

- The type of DNS record being requested (e.g., A, AAAA, TXT, MX, CNAME).

#### `.data.response`

- An array of DNS response records. Each entry represents a resource record returned by the DNS server.

#### `.data.dns_server`

- Information about the DNS server including IP, port, whether it's public, and IPv6 status.

#### `.data.community_id`

- A community ID for correlation with other security tools.
