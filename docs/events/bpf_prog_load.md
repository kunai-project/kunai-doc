---
sidebar_position: 21
---

# Bpf Prog Load

This **event** is generated every time a BPF program is loaded into the kernel.

:::info
Some fields might set to `null`, this is when the information is not available for the current **kernel**.
:::

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/containerd|/usr/bin/containerd-shim-runc-v2|/usr/bin/containerd-shim-runc-v2",
    "command_line": "runc --root /var/run/docker/runtime-runc/moby --log /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684/log.json --log-format json --systemd-cgroup create --bundle /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684 --pid-file /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684/init.pid --console-socket /tmp/pty2110970",
    "exe": {
      "path": "/usr/bin/runc"
    },
    "id": 5470,
    "prog_type": {
      "id": 15,
      "name": "cgroup_device"
    },
    "tag": "b8cb7c6e6d53ac49",
    "attached_func": "",
    "name": "",
    "ksym": "bpf_prog_b8cb7c6e6d53ac49",
    "bpf_prog": {
      "md5": "92b637d4d2b8a1b61e69ccc7e31e6f66",
      "sha1": "b8cb7c6e6d53ac494c2d4520cf2b4d6499ebbd36",
      "sha256": "c4c25d38300c43ef40735106f2af299bae5f43aca9063e7ad5210ef81e127c41",
      "sha512": "701347998c7457152217f7fe622c66af70b76c2f5df36b92ac9815d6389475d12f6c6d88bbd1420a6b144442aad3bd946d968fc52988c1c57e4ec5629d4ac6d7",
      "size": 512
    },
    "verified_insns": 223,
    "loaded": true
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 21,
      "name": "bpf_prog_load",
      "uuid": "9325e829-8aad-d3fc-3cfb-6121e06171fd",
      "batch": 605
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.822412612Z"
  }
}
```

## Additional Details

### Why This Event Matters

The `bpf_prog_load` event is crucial for:

1. **Security Monitoring**: Tracks BPF program loading, which can be used for both legitimate performance monitoring and malicious activities like rootkits and kernel-level attacks.
1. **Container Security**: Monitors BPF programs loaded within containers, helping detect container escapes and privileged operations.
1. **Forensic Analysis**: Provides detailed information about loaded BPF programs including hashes, types, and verification status for incident investigation.

### Key Fields Explained

#### `.data.ancestors`

- A pipe-separated list of the executable paths of the process ancestors that loaded the BPF program.

#### `.data.command_line`

- The command line of the process that loaded the BPF program.

#### `.data.exe.path`

- The path to the executable that loaded the BPF program.

#### `.data.id`

- The unique identifier assigned to the BPF program by the kernel.

#### `.data.prog_type`

- The type of BPF program, including both numeric `id` and human-readable `name` (e.g., "cgroup_device", "socket_filter", "kprobe").

#### `.data.tag`

- A unique tag/identifier for the BPF program.

#### `.data.attached_func`

- The function to which the BPF program is attached (if applicable).

#### `.data.name`

- The name of the BPF program.

#### `.data.ksym`

- The kernel symbol associated with the BPF program.

#### `.data.bpf_prog`

- Metadata about the BPF program including cryptographic hashes (MD5, SHA1, SHA256, SHA512) and size.

#### `.data.verified_insns`

- The number of BPF instructions that were successfully verified by the kernel verifier.

#### `.data.loaded`

- Boolean indicating whether the BPF program was successfully loaded.
