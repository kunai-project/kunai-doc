---
title: Builtin IoC matching
sidebar_position: 2
---

**IoC (Indicator of Compromise)** scanning results from the same motivation behind [detection rules](./rule_configuration). It addresses the need to log only events matching specific **IoCs**. Even though one can match IoC with [detection rules](./rule_configuration) it is not very convenient to manage for lots of **IoCs** and even less to automate. The other difference is on the resource management aspect. Detection rules has some non negligible processing/memory cost to work properly (find the rules to apply and then match against fields). On the other hand, IoC matching is reduced to a lookup in a set, so it is much more cpu and memory efficient.

### When should I use IoC scanning ?

* When you have lots of **IoCs**
* When you **do not need** to match **IoCs** against **regex** (use [detection rules](./rule_configuration))

:::caution
When **Kunai** is configured to match against **IoCs**, **ONLY** the events matching one or more **IoCs** will be shown.
:::

:::tip More context
If one wants to log some other events to bring **contextual information** to the IoC matches, it is possible to do so by configuring [log filtering](./rule_configuration#filtering-rules)
:::

## How does it work ?

Every **Kunai** event will see some of its fields systematically checked against **IoCs**. Basically, **any field** containing one of the following data types is checked against the **IoC** database loaded in memory:

| Kunai data types | cover IoC type |
|:------------:|:----------------:|
| path         | absolute path  |
| md5, sha1, sha256, sha512 | hash |
| domain / fqdn | domain / fqdn |
| IP address | IPv4 / IPv6    |

## Configuration

In order to configure IoCs to be matched with **Kunai** one simply has to create a file with **one JSON document per line** following that format

```json
{"uuid": "ioc_uuid", "source":"Some IoC source", "value":"ioc_value"}
```

Having such a minimal format makes the **IoC** creation trivial from almost any source while keeping context.

### Example

Assuming the following **IoC** configuration file

```json
{"uuid": "81050c82-68a5-4130-a56d-a465c8337066", "source":"Example", "value":"why.kunai.rocks"}
{"uuid": "dd19ecd1-8237-427a-9b1d-35ff7d17381f", "source":"Example", "value":"kunai.rocks"}
```

One can configure **Kunai** to take this file either via [configuration file](/docs/configuration#configuration-file) or via [command line flag](/docs/configuration#advanced-cli-usage)

Letting **Kunai** (configured with this file) run  **does not output any event** until we actually try to connect to `why.kunai.rocks` domain. When that happens, we should see an event arriving on our output with an additional `.detection` section, itself containing information about the **IoCs** matching the event. You might also notice that a **severity** also gets attributed to the event.


```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3",
    "command_line": "/usr/lib/firefox/firefox",
    "exe": {
      "file": "/usr/lib/firefox/firefox"
    },
    "query": "why.kunai.rocks",
    "proto": "udp",
    "response": "0xrawsec.github.io",
    "dns_server": {
      "ip": "10.96.0.1",
      "port": 53,
      "public": false,
      "is_v6": false
    }
  },
  "detection": {
    "iocs": [
      "why.kunai.rocks"
    ],
    "severity": 10
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 61,
      "name": "dns_query",
      "uuid": "9afe70fe-b763-8363-8ecc-02e73f990154",
      "batch": 91
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-02-13T12:00:57.596505416Z"
  }
}
```

:::tip severity
**Maximal** severity score is attributed to any event matching IoCs and this is not configurable.
:::