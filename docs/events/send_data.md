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
    "host": {
      "hostname": "ubuntu-22-04",
      "container": null
    },
    "event": {
      "id": 62,
      "name": "send_data",
      "uuid": "3e9e82ec-b635-9f8e-a8a7-308b547cef7e",
      "batch": 617
    },
    "task": {
      "name": "lxd",
      "pid": 1789,
      "tgid": 1533,
      "guuid": "d9fe704a-1800-0000-ba5f-b80efd050000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026532271
      }
    },
    "parent_task": {
      "name": "daemon.start",
      "pid": 1371,
      "tgid": 1371,
      "guuid": "4f62e1da-1700-0000-ba5f-b80e5b050000",
      "uid": 0,
      "gid": 0,
      "namespaces": {
        "mnt": 4026532271
      }
    },
    "utc_time": "2023-06-26T07:12:11.233194738Z"
  }
}
```
