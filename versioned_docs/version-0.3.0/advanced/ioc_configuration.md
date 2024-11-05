---
title: Builtin IoC matching
sidebar_position: 2
---

**IoC (Indicator of Compromise)** scanning results from the same motivation behind [detection rules](./rule_configuration). It addresses the need to log only events matching specific **IoCs**. Even though one can match IoC with [detection rules](./rule_configuration) it is not very convenient to manage for lots of **IoCs** and even less to automate. The other difference is on the resource management aspect. Detection rules has some non negligible processing/memory cost to work properly (find the rules to apply and then match against fields). On the other hand, IoC matching is reduced to a lookup in a set, so it is much more cpu and memory efficient.

### When should I use IoC scanning ?

* When you have lots of **IoCs**
* When you **do not need** to match **IoCs** against **regex** (otherwise use [detection rules](./rule_configuration))

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
{"uuid": "81050c82-68a5-4130-a56d-a465c8337066", "source":"Example", "value":"why.kunai.rocks", "severity": 4}
{"uuid": "dd19ecd1-8237-427a-9b1d-35ff7d17381f", "source":"Example", "value":"kunai.rocks", "severity": 2}
```

One can configure **Kunai** to take this file either via [configuration file](/docs/configuration#configuration-file) or via [command line flag](/docs/configuration#advanced-cli-usage)

Letting **Kunai** (configured with this file) run  **does not output any event** until we actually try to connect to `why.kunai.rocks` domain. When that happens, we should see an event arriving on our output with an additional `.detection` section, itself containing information about the **IoCs** matching the event. You might also notice that a **severity** also gets attributed to the event.


```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "command_line": "curl https://why.kunai.rocks",
    "exe": {
      "path": "/usr/bin/curl"
    },
    "socket": {
      "domain": "AF_INET",
      "type": "SOCK_DGRAM",
      "proto": "UDP"
    },
    "src": {
      "ip": "10.1.0.196",
      "port": 55686
    },
    "query": "why.kunai.rocks",
    "response": "kunai-project.github.io",
    "dns_server": {
      "ip": "10.7.0.251",
      "port": 53,
      "public": false,
      "is_v6": false
    },
    "community_id": "1:8G5yocM+oWSy5hbv1gXmeon8qVI="
  },
  "detection": {
    "iocs": [
      "kunai-project.github.io",
      "why.kunai.rocks"
    ],
    "severity": 6
  },
  ...
}
```

:::tip severity
**severity** score is stacking up until reaching **maximum severity value** (i.e. 10)
:::