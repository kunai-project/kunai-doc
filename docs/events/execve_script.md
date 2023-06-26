---
sidebar_position: 2
---

# Execve script

This event is generated under the same conditions as [execve event](execve). The only difference is that it provides additional information about the interpreter when the file being executed is a script.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/snap/lxd/24061/bin/lxd|/snap/lxd/24061/bin/lxd|/lib/systemd/systemd|/lib/systemd/systemd-udevd",
    "parent_exe": "/lib/systemd/systemd-udevd",
    "command_line": "/bin/sh -e /lib/open-iscsi/net-interface-handler start",
    "exe": {
      "file": "/lib/open-iscsi/net-interface-handler",
      "md5": "6984a1c2e8a7adfef586695bcabfab41",
      "sha1": "f25a9e144d120f30d2b18bad9ef370fdd74c21d8",
      "sha256": "b760c9dbcd0d50cbc8388b820e1028be8bf42c14677677da3eecfa86af173351",
      "sha512": "2937e52bf1942c3e037f39af63ce631aabbc01b6a35dd17e46e2aca5b1a9b0ece204de5f3c6e2b202e8e92e9b5dc4a2b8491fe6e56482657ed508f95a8cca9b3",
      "size": 2776
    },
    "interpreter": {
      "file": "/bin/dash",
      "md5": "453dc13f62c115c7b28cb4ede0ea3107",
      "sha1": "74a1dc2024957db6a9074401954b57dad2cf2aac",
      "sha256": "2fdc4546e1f425bcaf62624a7118fd4ba86c11e6277e8b9ee63263eb0dcbc6c5",
      "sha512": "4851c5847d33252ec65c9b16e91f925204f6f5ea170a6799284f80f44605389186454f40094e55c023d4f0eaec83f48d006af6f8a4332c6eb7ad5c6c27bb55f1",
      "size": 121432
    }
  },
  "info": {
    "host": {
      "hostname": "bionic-container",
      "container": "lxc"
    },
    "event": {
      "id": 2,
      "name": "execve_script",
      "uuid": "d64cb6cb-8cb5-b430-2241-a86cc3e2a32b",
      "batch": 22022
    },
    "task": {
      "name": "net-interface-h",
      "pid": 4326,
      "tgid": 4326,
      "guuid": "8a0b2fa4-7300-0000-ba5f-b80ee6100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532394
      }
    },
    "parent_task": {
      "name": "systemd-udevd",
      "pid": 4322,
      "tgid": 4322,
      "guuid": "22d3f8a3-7300-0000-ba5f-b80ee2100000",
      "uid": 1000000,
      "gid": 1000000,
      "namespaces": {
        "mnt": 4026532394
      }
    },
    "utc_time": "2023-06-26T07:12:55.140347420Z"
  }
}
```
