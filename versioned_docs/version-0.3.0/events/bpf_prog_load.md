---
sidebar_position: 21
---

# Bpf prog load

This **event** is generated every time a BPF program is loaded into the kernel.

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
