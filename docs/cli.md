---
sidebar_position: 4
---

# CLI Usage

Some of the configuration options can be set directly from CLI.

```
Usage: kunai [OPTIONS] [COMMAND]

Commands:
  install  Install Kunai on the system
  run      Run kunai with custom options
  replay   Replay logs into detection / filtering engine (useful to test rules and IoC based detection)
  config   Dump a default configuration
  logs     Easy way to show Kunai logs. This will work only with a configuration file and with an output file being configured
  help     Print this message or the help of the given subcommand(s)

Options:
  -d, --debug       Enable debugging
  -s, --silent      Silents out debug, info, error logging
  -v, --verbose...  Set verbosity level, repeat option for more verbosity
  -h, --help        Print help
  -V, --version     Print version
```

:::tip tips
**CLI** options **always override** [configuration](./configuration) file options
:::

### Testing Rules / IoC Configuration

When to use replay command:
* You want to test your [**detection/filtering rules**](advanced/rule_configuration.md)
* You want to test your [**IoC configuration**](advanced/ioc_configuration.md)

```
Usage: kunai replay [OPTIONS] [LOG_FILES]...

Arguments:
  [LOG_FILES]...  

Options:
  -c, --config <FILE>                Specify a configuration file to use. Command line options supersede the ones specified in the configuration file
      --bench                        Benchmark scanning engine
  -r, --rule-file <FILE>             Detection/filtering rule file. Supersedes configuration file
  -i, --ioc-file <FILE>              File containing IoCs (json line)
  -s, --min-severity <MIN_SEVERITY>  Minimal severity required to show detection
  -h, --help                         Print help
```

A typical usage of the replay command would be: `./kunai replay -i iocs.json -r rules.ioc /path/to/kunai/logs.jsonl`