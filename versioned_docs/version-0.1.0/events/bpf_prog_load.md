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
    "command_line": "/sbin/init maybe-ubiquity",
    "exe": "/usr/lib/systemd/systemd",
    "id": 166,
    "prog_type": {
      "id": 15,
      "name": "cgroup_device"
    },
    "tag": "c8b47a902f1cc68b",
    "attached_func": "",
    "name": "",
    "ksym": "bpf_prog_c8b47a902f1cc68b",
    "bpf_prog": {
      "md5": "fb32a4f4209fb18235bd125a659ea9ca",
      "sha1": "c8b47a902f1cc68b1531014317cd140f606df9b3",
      "sha256": "4b13b8318fb7df939cdbe0e8483a1a7a56150472db38ff77adf86455eeddb447",
      "sha512": "f7d7e03884a6fa6e2a6f7ffa7bb9089ecd047b8d0c9759b7c372843d5eac618a15cb3cd240753035d9b629f52834c93a98cdf10c262b9aeac45258c262ecab6b",
      "size": 464
    },
    "verified_insns": null,
    "loaded": true
  },
  "info": {
    ...
    "event": {
        ...
        "id": 21,
        "name": "bpf_prog_load",
        ...
    },
    ...
  }
}
```
