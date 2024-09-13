---
sidebar_position: 1000
---

# Compatibility

Kunai has been built to be compatible with all the **Linux LTS** kernels(from **5.4** to **6.6** at the time of writing). Compatibility is tested in our **CI/CD** pipeline at every modification to guarantee stability. 

Even with this rigorous testing it is possible that the program crashes before it can even start monitoring. If that happens to you **do not panic**, it does not mean the tool is bad, it just means your kernel is not supported yet, for a reason or another. Having a single binary fitting to several kernels is great for deployment however this has a cost: the programs needs to be aware of some of the changes made between the kernel versions.

:::tip multi kernel support
If you are interested into getting more knowledge about how kunai makes to supports several kernels at once, you should take a read to the [BPF CO-RE reference](https://nakryiko.com/posts/bpf-core-reference-guide/)
:::

In order to get your kernel version, run the following command `uname -r`, then you can check the following table.

<html>
 <table>
  <tr>
    <th>OS</th>
    <th>Kernels</th>
  </tr>
  <tr>
    <td>Ubuntu-20.04</td>
    <td>5.4</td>
  </tr>
  <tr>
    <td>Ubuntu-22.04</td>
    <td>5.15</td>
  </tr>
  <tr>
    <td>Archlinux</td>
    <td>5.18 to 6.6</td>
  </tr>
</table> 
</html>

:::tip My kernel is not in the table !

If your kernel version:
* is between the minimum and maximum kernel version, there are chances it will work without issue
* is higher than the maximum version supported, cross your fingers, it might work
* is lower than the minimum version, it is likely it will fail at running but try anyway you have nothing to lose

Please let us know if you tested kunai with success on an OS/kernel not listed above.

:::

:::tip I tested kunai with success on an OS/kernel not listed above
Let us know so that we can update the table
:::

## Known issues

### RLIMIT_MEMLOCK

Sometimes (mostly happening on old kernels) **Kunai** may fail at loading with the following
message (or something very similar).

```
[2024-04-11T13:25:35Z WARN  aya::maps] RLIMIT_MEMLOCK value is 8 MiB, not RLIM_INFINITY; if experiencing 
problems with creating maps, try raising RLIMIT_MEMLOCK either to RLIM_INFINITY or to a higher value 
sufficient for the size of your maps
Error: map error: failed to create map `FN_DEPTH` with code -1

Caused by:
    0: failed to create map `FN_DEPTH` with code -1
    1: Operation not permitted (os error 1)
```

You can check the current `RLIMIT_MEMLOCK` with `ulimit -l` and set the limit **temporarily** with
`ulimit -l unlimited`

You can increase the limit for `root` user permanently in `/etc/security/limits.conf`

```text title="/etc/security/limits.conf"
# increase root user memlock
root        hard    memlock        infinity
root        soft    memlock        infinity
```

For more information `man limits.conf`

