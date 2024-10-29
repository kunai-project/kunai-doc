---
sidebar_position: 2
---

# Installation

Kunai can be easily installed on the system using the `install` command

```
Usage: kunai install [OPTIONS]

Options:
      --harden                     Install in harden mode. First verify that /sys/kernel/security/lsm contains bpf
      --install-dir <INSTALL_DIR>  Set a custom installation directory [default: /usr/bin/]
      --log-file <LOG_FILE>        Log file where kunai logs will be written [default: /var/log/kunai/events.log]
      --config <CONFIG>            Where to write the configuration file. Any intermediate directory will be created if needed [default: /etc/kunai/config.yaml]
      --systemd                    Make a systemd unit installation
  -u, --systemd-unit <UNIT>        Install a systemd unit but do not enable it [default: /lib/systemd/system/00-kunai.service]
      --enable-unit                Enable Kunai unit (kunai will start at boot)
  -h, --help                       Print help
```

:::tip service installation
By default, `install` command just installs kunai, so **no service** will be installed. This has to be selected using `--systemd` option, one can also decide to enable the unit with
`--enable-unit`.
:::

## Systemd Installation

The following command would install `kunai` with all the defaults but
would also install and enable a **systemd unit**. 

```bash
kunai install --systemd --enable-unit
```