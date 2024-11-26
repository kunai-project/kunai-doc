---
title: Configuration with Rules
sidebar_position: 1
---

Using **Kunai** to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some **Kunai** users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation.

:::caution
When **Kunai** is configured with some detection/filtering rules, **ONLY** the events matching at least one rule will be shown.

If an event is **not desired** prefer [**disabling it in configuration**](../configuration#configuration-file) rather than **filtering it out**, it will **save resources**.
:::

:::info
We intentionally do not go too deep into the rule format as it will be part of a dedicated documentation in the [gene-rs project](https://github.com/0xrawsec/gene-rs)
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
    authors: [ qjerome ]
    # comments about the rule
    comments:
        - tries to catch binaries masquerading kernel threads
# acts as a pre-filter to speed up engine
match-on:
    events:
        # we match on kunai execve and execve_script events
        kunai: [execve, execve_script]
matches:
    # 0x200000 is the flag for KTHREAD
    $task_is_kthread: .info.task.flags &= '0x200000'
    # common kthread names 
    $kthread_names: .info.task.name ~= '^(kworker)'
# if task is NOT a KTHREAD but we have a name that 
# looks like one we want the rule to kick-in
condition: not $task_is_kthread and $kthread_names
# severity is bounded to 10 so it is the maximum score
severity: 10
```

If you want to try the above rule and see
how **Kunai** behaves when loaded with detection rules, you can do it easily:
1. dump the above rule in a file
1. run `sudo kunai -r path_to_your_file`
1. open another terminal and trigger the rule by executing `cp /usr/bin/ls /tmp/kworker && /tmp/kworker`

If you have made the experiment, you may have noted that when the rule matches the event is modified and contains a new section named `detection`. 

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
      "path": "/tmp/kworker",
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
* severities of **rules matching** are summed and put in `.detection.severity`. Severity is bounded to **10**.
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
        # applies on kunai mprotect_exec
        kunai: [ mprotect_exec ]
matches:
    # exe matches regex
    $browser: .data.exe.path ~= '/usr/lib/(firefox/firefox|chromium/chromium)'
# if exe is neither firefox nor chromium
condition: not $browser
```

:::tip
* Adapt the `$browser` match if needed
* You can try to reverse the condition (remove `not`) and see the difference
:::

:::caution
In case several **filtering rules** are specified, it is a **OR** relationship between them. This means, if a rule is supposed to **exclude** an event but another **includes** it, the event will be shown. So for **filtering rules** it is a good practice to create **one rule** per **event type** we want to **include**.
:::

### Realistic Example

Let's create a **filtering configuration** that logs **everything** except some noisy events.

```yaml
name: include.all.but.noisy
params:
  filter: true
match-on:
  events:
      # we can put - in front of the events we don't want this rule
      # to apply on. The following means, everything except 
      # mprotect_exec and prctl
      kunai: [ '-mprotect_exec', '-prctl' ]
# rule with no condition always returns true

---

# Rules have OR relationship between them so here after we keep
# ONLY some specific mprotect_exec we want to see, all others
# being excluded by the rule above
name: log.mprotect_exec
params:
    # flag to set so that the rule is used as a filter
    filter: true
match-on:
    events:
        # applies on kunai mprotect_exec
        kunai: [ mprotect_exec ]
matches:
    # exe matches regex
    $browser: .data.exe.path ~= '/usr/lib/(firefox/firefox|chromium/chromium)'
# if exe is neither firefox nor chromium
condition: not $browser
```

## Trigger Actions on Events

It is possible to tell **Kunai** to take **actions** on some events. Actions can be defined both in **filtering** and **detection** rules. The only difference is that some actions are not supported for **filtering** rules. For example it is not allowed to use a **kill** action within a **filtering** rule.

To list the available **actions** as well as their **description**, run:

```bash
kunai config --list-actions
```

### Example: Kill a Process

```yaml
# this is a condensed version of the rule defined previously
# killing the process instead of letting it run
name: mimic.kthread
match-on:
    events:
        kunai: [execve, execve_script]
matches:
    $task_is_kthread: .info.task.flags &= '0x200000'
    $kthread_names: .info.task.name ~= '^(kworker)'
condition: not $task_is_kthread and $kthread_names
severity: 10
actions: [ kill ]
```

1. dump the rule in a file `rule.yaml`
1. run kunai with `kunai run -r rule.yaml`
1. open another terminal and trigger the rule by executing `cp /usr/bin/ls /tmp/kworker && /tmp/kworker -R /`
1. **observe** the following:
    * a kunai event is generated as it comes from a detection
    * a **warning log** is printed showing a process got killed
    * our **fake malicious** process has been **killed**

:::danger
Use `kill` action **with extreme care**! Kunai runs with high privileges and can kill 
any process. 

Use it only if you are sure there is no false positives to
the detection rule.
:::

### Example: Scan Files

Similarly one can decide to **scan files on-demand**. There are two possibilities currently supported for file scanning:
1. **Kunai** has been [configured](../configuration.md) to load [Yara](https://virustotal.github.io/yara-x/) rules
    * a [`file_scan`](../events/file_scan) event will be generated with `.data.signatures` containing any **Yara signature** match and `.data.positives` indicating the **number of matching rules**
1. **Kunai** has **not** been configured to load **Yara** rules
    * in such case a [`file_scan`](../events/file_scan) event will be generated but `.data.signature` field will always be **empty** and `.data.positives` will always be `0`. This options might be interesting if one wants to get **metadata** information of some files without the burden of **Yara** file scanning.

:::tip
When a **file scan** is issued **any path** contained in the event is scanned. So in most of the cases it will result in several [`file_scan`](../events/file_scan) events being generated.
:::

```yaml
# this rule scans any bash script written on disk
name: scan.any.bash.script.write
params:
  filter: true
match-on:
    events:
        kunai: [ write_close ]
matches:
    $bash_ext: .data.path ~= '\.sh$'
condition: all of them
actions: [ scan-files ]

---

name: show.file_scan
params: true
match-on:
  events:
    kunai: [ file_scan ] 
```

To test the above rule:
1. write the above rule in a file `/tmp/scan.yaml`
2. Run kunai with `write_close` events **enabled** and load the rule file
```bash
kunai run --include write_close -r /tmp/scan.yaml
```
3. Drop a `bash` script somewhere and execute it
```bash
echo "ls -hail" > /tmp/test.sh && chmod +x /tmp/test.sh && /tmp/test.sh
```
4. observe that **two** [`file_scan`](../events/file_scan) events got printed

:::caution
To scan **dropped files** you must use [`write_close`](../events/write_close) events as those
indicate the file **has been closed** and de-facto cannot be written again
until it gets re-opened.
:::



## Memo about **Kunai** Rules

1. rules are written in [YAML](https://yaml.org/)
1. several rules can be defined in a single file (see [YAML documents](https://yaml.org/spec/1.2.2/#chapter-9-document-stream-productions))
    * put **a line** with `---` before rule starts and **a line**  with `...` after rule ends
1. one can use **Kunai** with rules either from [config](../configuration#configuration-file) or from [cli](../configuration#advanced-cli-usage)
1. a rule can either be a **detection** or a **filtering** rule
    * filtering rules output event **as is**
    * detection rules output event with **detection information** in `.detection` section
1. `match-on` section is **very important** as it allows to quickly filter events
1. every `match` in `matches` must be in the form `$VAR_NAME: FIELD_PATH OPERATOR 'VALUE'`
    * `FIELD_PATH`: **field's absolute path** starting with `.`, separated by `.`
    * `OPERATOR`: 
        * `==` : **equality operator**
        * `>=`, `<=`, `>`, `<` : **comparison operators** &rarr; `VALUE` must be a **number**
        * `&=` : **flag checking operator** &rarr; `VALUE` must be a **number**
        * `~=` : **regex operator** &rarr; `VALUE` must be a **string** regex following [syntax](https://docs.rs/regex/latest/regex/#syntax)
    * every **field value** found at `FIELD_PATH` is expected to be of the same type than `VALUE`
1. `condition` defines the **logic** to apply on the **matches**:
    * `not`, `and` and `or` keywords
    * support for **aggregated notation**:
      * `all of them`: all the variable must be `true`
      * `all of $VAR_PREFIX`: all variables **starting with VAR_PREFIX** must be `true`
      * `N of them`: `N` variables must be `true`
      * `N of $VAR_PREFIX`: `N` variables **starting with VAR_PREFIX** must be `true`
      * `none of them`: **None** of the variables must be `true` (all `false`)
      * `none of $VAR_PREFIX`: **None** of the variables **starting with VAR_PREFIX** must be `true` 

