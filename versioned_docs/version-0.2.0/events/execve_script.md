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
    "command_line": "/bin/bash /tmp/tmp.msdKnvj7ax_kunai_test.sh",
    "exe": {
      "file": "/tmp/tmp.msdKnvj7ax_kunai_test.sh",
      "md5": "64b8185d28042ea96feb251e12fe632b",
      "sha1": "31683c67b020d90f02a42e43e7758184ef98c12f",
      "sha256": "cda81b42b75647daf6b70a626380c199fe665d721e63bfe34c96b65da0289627",
      "sha512": "63165b902db5242a01296b39c1d6f2995fde961e29d9470d1862ccde8e2c8a3083659bf5d9c0794bbca620f37c419baec3c1d1941333d37fb9ced795553d2e83",
      "size": 21
    },
    "interpreter": {
      "file": "/usr/bin/bash",
      "md5": "e742da46d05de5afca58a2abcba5343e",
      "sha1": "8d48bdcb10eb85a0bd80c34e13fc01c2f6776043",
      "sha256": "664428e8dd065099a20cb364bdc293dd8f787ef10b9454b64e127a197950a5d6",
      "sha512": "b4e6f555571636f02704271d3a40b8470d04447ca3aaad073818f4041d944533bfbca0d5586dc945a2de8033f8fd4123f4203219e9c7b97ebbc52acd340e598f",
      "size": 1112880
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 2,
      "name": "execve_script",
      "uuid": "520487fc-020c-5569-ed88-38393e49a2d2",
      "batch": 32
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-13T08:34:29.312127521Z"
  }
}
```

