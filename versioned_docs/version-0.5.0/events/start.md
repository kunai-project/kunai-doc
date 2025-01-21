---
sidebar_position: 0
---

# Start

This event is generated when **Kunai** starts and contains both **system**-related information and **Kunai**-specific details. This event can help in understanding the system's state and verifying the Kunai configuration and environment at startup.

:::tip
* `.data.system.uptime` is expressed in seconds and corresponds to the first field in `/proc/uptime`.
* `.config.sha256` is the **hash** of the **configuration structure** serialized in YAML. If a configuration file is used, this hash may differ from the file's hash if the file contains comments or has removed fields.
:::

## Example JSON

Below is a sample JSON payload generated for the `start` event:

```json
{
  "data": {
    "system": {
      "uptime": 197068.69,
      "boot_time": "2025-01-15T07:31:42.590746600Z",
      "sysname": "Linux",
      "release": "6.6.70-1-lts",
      "version": "#1 SMP PREEMPT_DYNAMIC Thu, 09 Jan 2025 13:22:24 +0000",
      "machine": "x86_64",
      "domainname": "(none)"
    },
    "kunai": {
      "version": "0.4.0",
      "exe": {
        "path": "/usr/bin/kunai",
        "md5": "15078a8ec160157e37e946a47a3ab78b",
        "sha1": "7412dd078f7f5faf3c4643cbb4b6c511f4b0d608",
        "sha256": "47be2ba175b112c9d80fd548ff3da804279fa0e3b5e731f4499595ac375ae29b",
        "sha512": "11fea6eb157c289928d4136fc6f7b30ccef01d2146039de9891103152ff93fc1a819422c3b41ee7b5d49a6dea729f3b22cd0877c73c7a771ec23092f80cdcd90",
        "size": 20869296,
        "error": null
      },
      "config": {
        "sha256": "c9ff92bb5bf66d49c8bfd5a6c8d213fe2166015142040e4342134532ac803213"
      }
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1101,
      "name": "start",
      "uuid": "9b8964e6-bb07-45e4-a292-b559868b9a05",
      "batch": 0
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-01-17T14:16:11.059574865Z"
  }
}
```

## Additional Details

### Why This Event Matters
The `start` event is crucial for:
1. **Diagnostics**: It helps in identifying the system state when Kunai starts.
2. **Configuration Verification**: Confirms that the correct configuration is loaded and provides a checksum to validate consistency.
3. **Version Tracking**: Displays Kunai's version and executable details, which are essential for debugging and audits.

### Key Fields Explained
#### `.data.system`
- **`uptime`**: System uptime in seconds.
- **`boot_time`**: The system's boot time in UTC.
- **`sysname`, `release`, `version`, `machine`, `domainname`**: Metadata about the operating system.

#### `.data.kunai`
- **`version`**: The running version of Kunai.
- **`exe`**: Metadata about the Kunai executable, including its path, size, and hash values.
- **`config.sha256`**: A checksum of the configuration structure, useful for detecting changes or inconsistencies.

