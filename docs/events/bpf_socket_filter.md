---
sidebar_position: 22
---

# Bpf Socket Filter Attached

A socket filter attachement has been made (for instance via [getsockopt](https://man7.org/linux/man-pages/man2/getsockopt.2.html) syscall).

```json
{
    "data": {
        "command_line": "/usr/sbin/console-kit-daemon",
        "exe": "/dev/shm/kdmtmpflush",
        // socket related information
        "socket": {
            "domain": "AF_PACKET",
            "type": "SOCK_RAW"
        },
        // metadata related to the filter
        "filter": {
            "md5": "19c9f9f52a7d7bf1f9c26dc57034873b",
            "sha1": "c97c5ad700f7426432dbe4d6478f362714e835f0",
            "sha256": "1a23f76646d1741946afd2d6d3ce3d0deae14198b544b09322a540c345953988",
            "sha512": "af9fce79e05316999ae3ef82ea7a04ce299c611cb46e27154e455b9f9bea42631a5293dd42cb0d332d5e10b8ed924930321cb3433b7989e6fe9042d97338d477",
            // length of the filter (in number of BPF instructions)
            "len": 30,
            // size of the filter (in bytes)
            "size": 240
        },
        // whether filter got attached successfully 
        "attached": true
    },
    "info": {
        ...
        "event": {
            ...
            "id": 22,
            "name": "bpf_socket_filter",
            ...
        },
        ...
    }
}
```