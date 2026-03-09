---
sidebar_position: 22
---

# Bpf Socket Filter Attached

A socket filter attachment has been made (for instance via [getsockopt](https://man7.org/linux/man-pages/man2/getsockopt.2.html) syscall).

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo|/usr/bin/timeout",
    "command_line": "tcpdump tcp port 42",
    "exe": {
      "path": "/usr/bin/tcpdump"
    },
    "socket": {
      "domain": "AF_PACKET",
      "type": "SOCK_RAW",
      "proto": "IP"
    },
    "filter": {
      "md5": "f14a5bc6d08bc46424827f54d2e3f8ed",
      "sha1": "0f29b02f9eff3b0f2b9bba51e299b6a0b7493ff0",
      "sha256": "23d7f42b1cdc1f0d492ebd756ed0fe8003995dda554d99418d47a81813650207",
      "sha512": "f6ec9d10ae03d32f6b31ae37322b629ec7caad83dd3c5dd870df8e6fd13a5a512b3bc2de8384504781eedebdbfaacb52b6213a2673a8433ddad0b142322d704e",
      "len": 1,
      "size": 8
    },
    "attached": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 22,
      "name": "bpf_socket_filter",
      "uuid": "5e4c9ff9-40dc-6e0e-1611-c144f99fdfe4",
      "batch": 701
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:59.819970359Z"
  }
}
```

:::info

* `.data.filter.len` is the length of the filter **in number of BPF instructions**
* `.data.filter.size` is the size of the filter **in bytes**
:::

## Additional Details

### Why This Event Matters

The `bpf_socket_filter` event is crucial for:

1. **Network Monitoring**: Tracks when BPF socket filters are attached, which is commonly used by network monitoring tools like tcpdump.
1. **Security Monitoring**: Detects potentially malicious socket filtering that could be used for network sniffing or traffic manipulation.
1. **Forensic Analysis**: Provides cryptographic hashes of socket filters for verification and incident investigation.

:::tip
The `filter` field contains cryptographic hashes of the BPF socket filter program, allowing you to find known malicious filters. The `len` field shows the number of BPF instructions, while `size` shows the total size in bytes.
:::

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that attached the socket filter.

#### `.data.command_line`

- The command line of the process that attached the socket filter.

#### `.data.exe.path`

- The path to the executable that attached the socket filter.

#### `.data.socket`

- Information about the socket including domain, type, and protocol.

#### `.data.filter.md5`

- The MD5 hash of the BPF socket filter program.

#### `.data.filter.sha1`

- The SHA1 hash of the BPF socket filter program.

#### `.data.filter.sha256`

- The SHA256 hash of the BPF socket filter program.

#### `.data.filter.sha512`

- The SHA512 hash of the BPF socket filter program.

#### `.data.filter.len`

- The length of the filter in number of BPF instructions.

#### `.data.filter.size`

- The size of the filter in bytes.

#### `.data.attached`

- Boolean indicating whether the socket filter was successfully attached.
