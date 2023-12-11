---
title: Configuration with Rules
---

Using **Kunai** to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some **Kunai** users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation.

:::caution
When **Kunai** is configured with some detection/filtering rules, **ONLY** the events matching at least one rule will be shown.
:::

:::info
I intentionally do not go too deep into the rule format as it will be part of a dedicated documentation in the [gene-rs project](https://github.com/0xrawsec/gene-rs)
:::

## Detection Rules

Detection rules are made to detect **suspicious/malicious security events** happening on a running system. 

:::tip
**detection rules** will make modifications to the matching events to provide information about the matching rule(s)
:::

### Example

Here after you can find an example of a detection rule to detect an `execve` event with a task name looking like
a typical Linux kernel task name. This is a technique sometimes used by malware to hide themselves.

```yaml
# name of the rule
name: mimic.kthread
# metadata information
meta:
    # tags of the rule
    tags: [ 'os:linux' ]
    # MITRE ATT&CK ids
    attack: [ T1036 ]
    # authors of the rule
    authors: [ 0xrawsec ]
    # comments about the rule
    comments:
        - tries to catch binaries masquerading kernel threads
# acts as a pre-filter to speed up engine
match-on:
    events:
        # we match on kunai execve and execve_script event ids
        kunai: [1, 2]
matches:
    # 0x200000 is the flag for KTHREAD
    $task_is_kthread: .info.task.flags &= '0x200000'
    # common kthread names 
    $kthread_names: .info.task.name ~= '^(kworker)'
# if task is NOT a KTHREAD but we have a name that looks like one
condition: not $task_is_kthread and $kthread_names
# severity is bounded to 10 so it is the maximum score
severity: 10
```

Whenever the above rule matches a **Kunai** event, the event will be modified and
will contain a new section named `detection`.

<details>
<summary>View modified event</summary>
<p>

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "parent_exe": "/usr/bin/zsh",
    "command_line": "/tmp/kworker",
    "exe": {
      "file": "/tmp/kworker",
      "md5": "5a657abb15a5c469936ec86f420f7b39",
      "sha1": "5d08746413e0e5f3242fe768266e39796007ca2d",
      "sha256": "b97ab6fabafba27199d50a190a2ad6513ccf8ee722558e86d2a45fd2ac535c67",
      "sha512": "eed4577694e87932beff79898f7abe5dfb672b7d4d4c02a57d86f96f62826f92bdd1514c80e0329d4f9861946cfb80563584074d64fbaf4ce2ee386f28d55433",
      "size": 137848
    }
  },
  "detection": {
    "rules": [
      "mimic.kthread"
    ],
    "tags": [
      "os:linux"
    ],
    "attack": [
      "T1036"
    ],
    "severity": 10
  },
  "info": {
    ...
    "event": {
      "source": "kunai",
      "id": 1,
      "name": "execve",
      "uuid": "d21cc4e6-35f9-4193-e879-84fdd4ce74f3",
      "batch": 12
    },
    "task": {
      "name": "kworker",
      "pid": 1368247,
      "tgid": 1368247,
      "guuid": "2d83bc47-d838-0300-a6a2-85b0b7e01400",
      "uid": 1000,
      "gid": 1000,
      "namespaces": {
        "mnt": 4026531841
      },
      "flags": "0x400000"
    },
    "parent_task": {
      "name": "zsh",
      "pid": 302186,
      "tgid": 302186,
      "guuid": "1ce53685-7339-0000-a6a2-85b06a9c0400",
      "uid": 1000,
      "gid": 1000,
      "namespaces": {
        "mnt": 4026531841
      },
      "flags": "0x400000"
    },
    "utc_time": "2023-12-11T10:04:49.301495661Z"
  }
}
```
</p>
</details>

:::tip
* if several rules match a single event, rule name(s) will appear in `.detection.rules`
* matching rules' `tags` and `attack` (MITRE ATT&CK) ids will stack up respectively in `.detection.tags` and `.detection.attack` 
:::

## Filtering Rules

Filtering rules on the other hand are made to **select** the logs we want **Kunai** to show.
With those you can be very granular on the kind of logs you want to filter in/out.
The difference between a detection and a filtering rule is very little, it is just a switch
to toggle in the rule.

:::info
Events matching **ONLY filtering rules** will be shown **as is**, which means that there will
not be any `detection` section in the event.
:::


### Example

Let's design a filtering rule to log every `mprotect_exec` event but the ones made by
a browser. Indeed any software using JIT is very likely to turn some memory pages protection 
to execute code.

:::tip 
`mprotect_exec` are interesting events to detect dynamic 
code execution, such as shellcode. However, those events may be very noisy if you 
have a browser running or any application making extensive use of JIT. So the following example
can be used as a base for a custom configuration to observe unknown `mprotect_exec` events.
:::

```yaml
name: log.mprotect_exec
params:
    # flag to set so that the rule is used as a filter
    filter: true
match-on:
    events:
        # kunai mprotect_exec event id
        kunai: [ 40 ]
matches:
    # exe matches regex
    $browser: .data.exe ~= '/usr/lib/(firefox/firefox|chromium/chromium)'
# if exe is neither firefox nor chromium
condition: not $browser
```

:::tip
* Adapt the `$browser` match if needed
* You can try to reverse the condition (remove `not`) and see the difference
:::

## Memo about **Kunai** Rules

1. rules are written in [YAML](https://yaml.org/)
1. several rules can be defined in a single file (see [YAML documents](https://yaml.org/spec/1.2.2/#chapter-9-document-stream-productions))
    * put **a line** with `---` before rule starts and **a line**  with `...` after rule ends
1. one can use **Kunai** with rules either from from [config](../configuration#configuration-file) or from [cli](../configuration#advanced-cli-usage)
1. a rule can either be a **detection** OR a **filtering** rule
    * filtering rules output event **as is**
    * detection rules output event with **detection information** in `.detection` section
1. `match-on` section is very important as it allow to quickly filter events
1. every `match` in `matches` must be in the form `$OPERAND: FIELD_PATH OPERATOR 'VALUE'`
    * `FIELD_PATH`: **field's absolute path** starting with `.`, separated by `.`
    * `OPERATOR`: 
        * `==` : **equality operator**
        * `>=`, `<=`, `>`, `<` : **comparison operators** &rarr; `VALUE` must be a **number**
        * `&=` : **flag checking operator** &rarr; `VALUE` must be a **number**
        * `~=` : **regex operator** &rarr; `VALUE` must be a **string** regex following [syntax](https://docs.rs/regex/latest/regex/#syntax)
    * every **field value** found at `FIELD_PATH` are expected to be of the same type than `VALUE`
1. `condition` supports `not`, `and` and `or` keywords


