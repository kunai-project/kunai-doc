---
sidebar_position: 3
---

# Configuration

```
Usage: kunai config [OPTIONS]

Options:
      --dump          Dump a default configuration on the terminal
      --list-actions  List the available remediation actions supported
      --list-events   List available events
  -h, --help          Print help
```

By default **kunai** does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.

In order to generate a **default configuration** file for **kunai** use the following command line.

```bash
./kunai config --dump
```

:::tip Default configuration
Using `config --dump` option gives you a view on the default configuration of the tool when ran without setting `-c --config` option
:::

## Configuration File

```yaml
# UUID identifying the host. This is auto-generated and should not be changed.
host_uuid: c030b40d-0eab-417b-b33a-22d952357984

# This is the maximum number of events that can be stored in the buffer used by the eBPF probes.
# This limit might need to be increased if events get lost (likely due to high throughput).
# NB: increasing this limit also increases the memory used by Kunai.
max_buffered_events: 1024

# Settings that define the maximum number of events per second (per CPU)
# allowed before a task is throttled.  If this limit is exceeded, an error
# event is generated and a message is printed to stderr.  When throttling
# occurs, only file system events will be dropped.  This mechanism prevents
# the loss of critical events during file system bursts.
max_eps_fs: 2048

# Optional: specify the number of worker threads to use for multi-threading.
# Set to 0 to use the maximum number of CPUs.
# By default, Kunai is single-threaded.
workers: null

# Optional: specify the minimum length of data to trigger a send_data event.
send_data_min_len: null

# Whether to run Kunai in hardened mode.
# This mode protects the Kunai process from being tampered with.
# Requires 'bpf' to be in the list of LSM kernel boot parameters. 
# Verify by checking /sys/kernel/security/lsm.
harden: false

# Output configuration
output:
  # Where the events should be written.
  path: /dev/stdout

  # Optional: specify a file rotation size limit (in bytes).
  rotate_size: null
  # Example: we rotate when the current log file reaches 10MB
  # rotate_size: 10MB

  # Optional: specify the maximum output file size (in bytes).
  max_size: null
  # Example: when the total size of logs reaches 1GB we start to
  # delete old files
  # max_size: 1GB

  # Whether the output is buffered. If set to true some delay
  # might be observed between event and the time it is written
  # to the output file.
  buffered: false

# Scanner configuration
scanner:
  # Path to files or directories containing Kunai detection/filtering rules to load in the engine.
  # Supported file extensions: kun, kunai, gen, gene.
  rules: []

  # Path to files or directories containing IoCs to be loaded.
  # Supported file extensions: ioc.
  iocs: []

  # Path to files or directories containing YARA rules.
  # Supported file extensions: yar, yara.
  yara: []

  # Display detection event only if severity is greater or equal to min_severity
  # Setting this to 0 displays all detection events even those with very low severity
  min_severity: 0

  # Ensure every positive YARA file scan will be displayed.
  show_positive_file_scan: true

events:
  # Enable or disable specific events.
  execve:
    enable: true
  execve_script:
    enable: true
  exit:
    enable: true
  exit_group:
    enable: true
  clone:
    enable: true
  prctl:
    enable: true
  kill:
    enable: true
  ptrace:
    enable: true
  init_module:
    enable: true
  bpf_prog_load:
    enable: true
  bpf_socket_filter:
    enable: true
  mprotect_exec:
    enable: true
  mmap_exec:
    enable: true
  connect:
    enable: true
  dns_query:
    enable: true
  send_data:
    enable: true
  read:
    enable: false
  read_config:
    enable: true
  write:
    enable: false
  write_config:
    enable: true
  file_rename:
    enable: true
  file_unlink:
    enable: true
  write_close:
    enable: false
  file_scan:
    enable: true
```

:::info 
**Enabling/disabling** logs will impact the **amount of logs** generated and the **performance** of Kunai. **Disabling** events will decrease **CPU** and **RAM** consumed while **enabling** will increase those.

If you are looking for advanced log filtering please look at [log filtering documentation](./advanced/rule_configuration).
:::

:::warning
Log rotation **will work if and only if** `output`
parameter **is a file**.
:::

