---
sidebar_position: 2
---

# Configuration

By default **kunai** does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.

In order to generate a **default configuration** file for **kunai** use the following command line.

```bash
./kunai --dump-config
```

:::tip Default configuration
Using `--dump-config` option gives you a view on the default configuration of the tool when ran without setting `-c --config` option
:::

## Configuration File

```toml
// UUID identifying the host
host_uuid = "c030b40d-0eab-417b-b33a-22d952357984"

// where the events should be written
output = "/dev/stdout"

// this is the maximum number of events that can be stored in the 
// buffer used by the eBPF probes. This limit might need to be increased
// if events get lost (very likely due to a high troughput).
// NB: increasing this limit also increase the memory used by kunai
max_buffered_events = 1024

// paths to files containing detection/filtering rules
rules = []

// path to files containing iocs to match against
iocs = []

[[events]]
name = "execve"
enable = true

[[events]]
name = "execve_script"
enable = true

[[events]]
// corresponds to tasks being scheduled, it is used to gather
// correlation information and not display events per se
name = "task_sched"
enable = true

[[events]]
name = "exit"
enable = true

[[events]]
name = "exit_group"
enable = true

[[events]]
name = "clone"
enable = true

[[events]]
name = "prctl"
enable = true

[[events]]
name = "init_module"
enable = true

[[events]]
name = "bpf_prog_load"
enable = true

[[events]]
name = "bpf_socket_filter"
enable = true

[[events]]
name = "mprotect_exec"
enable = true

[[events]]
name = "mmap_exec"
enable = true

[[events]]
name = "connect"
enable = true

[[events]]
name = "dns_query"
enable = true

[[events]]
name = "send_data"
enable = true

[[events]]
name = "read"
// disabled by default as it generates a large amount of events
enable = false

[[events]]
name = "read_config"
enable = true

[[events]]
// disabled by default as it generates a large amount of events
name = "write"
enable = false

[[events]]
name = "write_config"
enable = true

[[events]]
name = "file_rename"
enable = true

[[events]]
name = "file_unlink"
enable = true
```

:::info 
Enabling/disabling logs will impact the performance of the tool. If you are looking for advanced log filtering please look at [log filtering documentation](./advanced/rule_configuration)
:::

### Log rotation

:::info
log rotation feature is available since `v0.2.5` **only**
:::

Log rotation is possible by defining a `[output_settings]` section
in the configuration file. Log rotation **will work if and only if** `output`
setting **is a file**.

```toml
host_uuid = "c030b40d-0eab-417b-b33a-22d952357984"
output = "/var/log/kunai/events.jsonl"
max_buffered_events = 1024
rules = []
iocs = []

// this section has to come after iocs
[output_settings]
// we rotate when the current log file reaches 100MB
rotate_size="100MB"
// when the total size of logs reaches 10GB we start to
// delete old files
max_size="10GB"

// continue here with the rest of the configuration
[...]
```

## Advanced CLI usage

Some of the configuration options can be set directly from CLI.

```
Usage: kunai [OPTIONS]

Options:
      --debug
          Enable debugging
  -c, --config <FILE>
          Specify a configuration file to use. Command line options supersede the ones specified in the configuration file.
      --dump-config
          Prints a default configuration to stdout
      --show-events
          Show details about configurable events on stdout
      --exclude <EXCLUDE>
          Exclude events by name (comma separated)
      --include <INCLUDE>
          Include events by name (comma separated). Supersedes any exclude filter.
      --max-buffered-events <MAX_BUFFERED_EVENTS>
          Increase the size of the buffer shared between eBPF probes and userland
  -r, --rule-file <FILE>
          Detection/filtering rule file. Supersedes configuration file
  -i, --ioc-file <FILE>
          File containing IoCs (json line)
  -v, --verbose...
          Set verbosity level, repeat option for more verbosity.
  -s, --silent
          
  -h, --help
          Print help
  -V, --version
          Print version
```

:::tip tips
* CLI options override configuration file options
* you can used `--include all` or `--exclude all` to respectively include or exclude all events
:::

### Testing rules / IoC configuration

:::info
`replay` command is available only since `v0.2.1`
:::

When to use replay command:
* You want to test your [**detection/filtering rules**](advanced/rule_configuration.md)
* You want to test your [**IoC configuration**](advanced/ioc_configuration.md)

```
Usage: kunai replay [LOG_FILES]...

Arguments:
  [LOG_FILES]...  

Options:
  -h, --help  Print help
```

A typical usage of the replay command would be: `./kunai -i iocs.json -r rules.yaml replay /path/to/kunai/logs.jsonl`
