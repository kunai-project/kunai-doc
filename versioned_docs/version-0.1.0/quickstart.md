---
sidebar_position: 1
---

# Quick Start

Before going further, please make sure you've read the [compatibility](compatibility) page.

You don't need to do a lot in order to evaluate what **kunai** is capable of, just launch the binary with a **privileged user** and you should see a bunch of events flowing in your terminal !


```bash
sudo kunai
```

:::tip Why sudo ?
Kunai needs to load eBPF programs into the kernel so it requires elevated privileges
:::

You can try to make some activity on your host and see if kunai catches it properly. In order to understand the events generated please refer to [events documentation](category/kunai---events).
