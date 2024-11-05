---
sidebar_position: 500
---

# File Scan

Such events are generated when a [`scan-files`](../advanced/rule_configuration.md#example-scan-files) action is requested. This event is a bit particular compared to other because it is triggered from another event. You can find the **cross-reference** to the **triggering event** in `.data.source_event` field.

This event follows the same **event processing path** as any other **Kunai event**, meaning that they can match any [**filtering/detection rule**](../advanced/rule_configuration). This offers a great way to register some [**actions**](../advanced/rule_configuration.md#taking-actions-on-events) to be taken when a file triggers a **Yara** signature.

```json
{
  "data": {
    "path": "/tmp/hello_kunai.txt",
    "meta": {
      "md5": "9047c9883f04d6ec7ce153b395582c7f",
      "sha1": "d41b8cc90a37973847e29b7fb5fa502c926f5aaf",
      "sha256": "89e6cbb99f61440be7ad785203a0e91ecf523568254be6330b533700d917eb45",
      "sha512": "41f6905b8a6e7530968d0b119b0f1011b87f92f06281ce89a6fe581a86d8ba66b4d51958d86727733ef2330ee3e4ddd95cc3fd832a7602aa29e48d1646013ef9",
      "size": 12,
      "error": null
    },
    "signatures": [
      "HelloKunai"
    ],
    "positives": 1,
    "source_event": "e3ba27c2-c85c-4a79-2219-4ecb146efc6e",
    "scan_error": null
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 500,
      "name": "file_scan",
      "uuid": "df226552-3f04-4139-9e7e-7607bb5b29af",
      "batch": 877
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2024-10-29T12:48:02.476850786Z"
  }
}
```
