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
// where the events should be written
output = "/dev/stdout"

// this is the maximum number of events that can be stored in the 
// buffer used by the eBPF probes. This limit might need to be increased
// if events get lost (very likely due to a high troughput).
// NB: increasing this limit also increase the memory used by kunai
max_buffered_events = 1024

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
name = "init_module"
enable = true

[[events]]
name = "bpf_prog_load"
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
name = "mount"
enable = true

[[events]]
// disabled by default as it generates a large amount of events
name = "read"
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
```

:::info 
Configuration is very basic for the moment, any sort of advanced filtering will be implemented later in the project.
:::