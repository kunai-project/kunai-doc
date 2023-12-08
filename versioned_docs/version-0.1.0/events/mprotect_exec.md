---
sidebar_position: 40
---

# Mprotect exec

This kind of event is generated when memory protection is turned to **executable**.

:::info
For some processes, those using JIT compilers, it is legit to generate a lot of mprotect_exec events.
:::


```json
{
  "data": {
    "command_line": "/usr/lib/firefox/firefox -contentproc -childID 376 -isForBrowser -prefsLen 33058 -prefMapSize 242973 -jsInitLen 238780 -parentBuildID 20230523141515 -appDir /usr/lib/firefox/browser {a19d79d0-0a99-4f78-8704-9bb4df5bf274} 9 true tab",
    "exe": "/usr/lib/firefox/firefox",
    "addr": "0xd730b30000",
    "prot": "0x00000005"
  },
  "info": {
    ...
    "event": {
        ...
        "id": 40,
        "name": "mprotect_exec",
        ...
    },
    ...
  }
}
```
