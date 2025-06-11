---
sidebar_position: 2
title: Installation
---

## Get Kunai Binary 

### Download

1. Download **Kunai** from GitHub on the [release page](https://github.com/kunai-project/kunai/releases).
2. Download the signature file (i.e., the one ending with `.asc`) corresponding to the binary you previously downloaded.
3. Add the signature key:
   ```bash
   gpg --keyserver pgp.circl.lu --recv-keys C0F6E8F2C1AB2799A31F416C0548A778D21D10AD
   ```
4. Verify your download. For example, if you downloaded the `x86_64` version of Kunai, use the following command:
   ```bash
   gpg --verify kunai-amd64.asc kunai-amd64
   ```

### Build Kunai

To build Kunai, please follow the instructions in [this repository](https://github.com/kunai-project/kunai-build-docker/).


## Installation

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

The following command would install `kunai` with all the defaults but would also install and enable a **systemd unit**. Once the service is up and running it can be managed as any other **systemd** service.

```bash
kunai install --systemd --enable-unit
```

:::caution SERVICE NAME
By default the unit is named `00-kunai.service` so that it starts before other services. The default is also to create an **alias** `Alias=kunai.service` to simplify some command lines such as `systemctl status kunai`.
:::

:::danger hardened installation
**Kunai service** can be installed in **hardened** mode. It simply runs kunai in **hardened** mode by setting [configuration](configuration#configuration) properly.

**Hardened mode** is a security mechanism preventing **kunai** from being stopped by **malware** so this mode comes with some limitations. 

* any `kill` signal sent to kunai will be **denied**
* when installed this way, the service is protected and **cannot be stopped** with **systemctl**. If you try it would simply fail.
* since kunai cannot be stopped, it **cannot be restarted** either. So any configuration change will need a **system reboot** to be taken into account
* to **stop** kunai one needs to disable the service with **systemctl disable kunai** and **reboot the system**
:::