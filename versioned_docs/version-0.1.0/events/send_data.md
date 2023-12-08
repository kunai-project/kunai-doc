---
sidebar_position: 62
---

# Send data

This events gets generated when data is sent to a remote IP address.

:::tip
* `.data.dst.hostname` is a correlated field from a previous [dns_query](dns_query) event
* `.data.data_entropy` gives you **an estimate** of the entropy of the data sent. This can be used to identify **high entropy** (i.e. compressed, encrypted) communications.
:::

```json
{
  "data": {
    "command_line": "lxd --logfile /var/snap/lxd/common/lxd/logs/lxd.log --group lxd",
    "exe": "/snap/lxd/24061/bin/lxd",
    "dst": {
      "hostname": "cloud-images.ubuntu.com",
      "ip": "185.125.190.37",
      "port": 80,
      "public": true,
      "is_v6": false
    },
    "data_entropy": 5.318399906158447,
    "data_size": 258
  },
  "info": {
    ...
    "event": {
        ...
        "id": 62,
        "name": "send_data",
        ...
    },
    ...
  }
}
```
