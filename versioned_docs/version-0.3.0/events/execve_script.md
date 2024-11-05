---
sidebar_position: 2
---

# Execve script

This event is generated under the same conditions as [execve event](execve). The only difference is that it provides additional information about the interpreter when the file being executed is a script.

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",
    "parent_exe": "/usr/bin/bash",
    "command_line": "/bin/bash /tmp/tmp.URdsDAjMAu_kunai_test.sh",
    "exe": {
      "path": "/tmp/tmp.URdsDAjMAu_kunai_test.sh",
      "md5": "64b8185d28042ea96feb251e12fe632b",
      "sha1": "31683c67b020d90f02a42e43e7758184ef98c12f",
      "sha256": "cda81b42b75647daf6b70a626380c199fe665d721e63bfe34c96b65da0289627",
      "sha512": "63165b902db5242a01296b39c1d6f2995fde961e29d9470d1862ccde8e2c8a3083659bf5d9c0794bbca620f37c419baec3c1d1941333d37fb9ced795553d2e83",
      "size": 21,
      "error": null
    },
    "interpreter": {
      "path": "/usr/bin/bash",
      "md5": "2c58fc9dd883e10e35995eb3d797684e",
      "sha1": "99688e8f250dd60ce227e49db4aad18ef7efe328",
      "sha256": "ec09b963cb5fe14aa0cd58a81c3a11dc8eb5daea92a277e2057b6fec150d0daa",
      "sha512": "ce5fedee414b674ba5aa415421754ba8eb262727004ae498ce1dafa7a9e5ad9d6761cf049c7885c9373b68c365fe878086f69ee1e2002182bcfc7e2791261e65",
      "size": 1117080,
      "error": null
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 2,
      "name": "execve_script",
      "uuid": "85f60779-e764-220c-1c5e-2e335b0d12ac",
      "batch": 606
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:47:58.845481195Z"
  }
}
```
