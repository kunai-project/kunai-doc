---
title: Rule Syntax Reference
sidebar_position: 3
---

# Kunai Rule Syntax Reference

This page provides comprehensive documentation of Kunai's rule syntax, including all operators, condition types, and rule composition patterns.

## Basic Rule Structure

Kunai rules use **YAML** format for configuration. YAML provides a human-readable data serialization format that's well-suited for defining complex rule structures with nested conditions and metadata.

```yaml
# Required: Rule identifier (alphanumeric + underscores)
name: rule_name

# Optional: Rule type (default: detection)
type: detection | filter | dependency

# Optional: Decision mechanism (default: include)
decision: include | exclude

# Optional: Extra rule's parameter(s)
params:
  # Flag to disable the rule (default: false)
  disable: true | false

# Optional: Metadata for documentation and correlation
meta:
  tags: [tag1, tag2]              # Classification tags
  attack: [MITRE_ATTACK_ID]       # MITRE ATT&CK techniques
  authors: [author_name]           # Rule authors
  comments:                       # Additional context
    - Comment line 1
    - Comment line 2

# Optional: Event filtering for performance optimization (default: rule is evaluated against all events)
match-on:
  events:
    kunai: [event_name1, event_name2]  # Events to match
    # Use '-' prefix to exclude specific events (include all others)
    # kunai: [-event_to_exclude, -another_event]

# Optional: Field matching definitions (default: no variables)
matches:
  $var_name: FIELD_PATH OPERATOR 'VALUE'
  # Multiple match definitions...

# Optional: Logical condition combining matches (default: true)
condition: LOGICAL_EXPRESSION

# Optional: Severity score (1-10, 10 = most severe)
severity: 5

# Optional: Actions to take on matching events
actions: [action1, action2]
```

## Field Matching Syntax

Field matching definitions are specified in the `matches` section of a rule. Each match defines a variable that can be referenced in the rule's condition.

### Format
**`$VAR_NAME: FIELD_PATH OPERATOR 'VALUE'`**

Where:
- `$VAR_NAME`: Variable name (prefix with `$`)
- `FIELD_PATH`: Path to the field in the event data
- `OPERATOR`: Comparison operator
- `VALUE`: Value to compare against

### FIELD_PATH Specification

- **Absolute path** starting with `.`
- **Dot-separated hierarchy**: `.data.exe.path`, `.info.task.name`
- **Supports nested objects**: `.data.target.task.pid`
- **Array access**: Use standard JSON path syntax

### Supported Operators

| OPERATOR | Description | Value Type | Example |
|----------|-------------|------------|---------|
| `==` \| `is` | Equality check | Any | `.data.exe.path == "/usr/bin/bash"` |
| `>` | Greater than | Number | `.data.size > 1000` |
| `>=` | Greater than or equal | Number | `.info.task.pid >= 1000` |
| `<` | Less than | Number | `.data.error_code < 10` |
| `<=` | Less than or equal | Number | `.data.size <= 5000` |
| `&=` | Bitwise AND | Number | `.info.task.flags &= 0x200000` |
| `~=` | Regex match | String | `.data.exe.path ~= '^/usr/bin/'` |

### VALUE Requirements

VALUE must match the field's data type exactly - type mismatches are a common source of rule failures and will cause the match condition to fail.

- **Numbers**: No quotes required (`42`, `3.14`)
- **Strings**: Use single or double quotes (`"value"`, `'value'`)
- **Regex**: Quoted string that must follow [syntax](https://docs.rs/regex/latest/regex/#syntax)
- **Boolean**: `true` or `false` (unquoted)
- **Option**: `some` or `none` (unquoted)

## Logical Conditions

The `condition` section of a rule defines the logical relationship between match variables. This is where you specify how the individual field matches should be combined to determine whether the rule should trigger.

### Basic Logical Operators

```yaml
# Negation
condition: not $var

# Logical AND
condition: $var1 and $var2

# Logical OR
condition: $var1 or $var2

# Grouping with parentheses
condition: ($var1 and $var2) or $var3

# Complex expression
condition: ($match1 or $match2) and not $exclude
```

### Aggregated Condition Notation

Aggregated conditions provide a concise way to express complex logical relationships without writing lengthy boolean expressions. This notation is particularly useful when working with multiple related variables.


| Syntax | Meaning | Example |
|--------|---------|---------|
| `all of them` | All defined variables must be true | `all of them` |
| `all of $prefix` | All `$prefix*` variables must be true | `all of $net` |
| `N of them` | Exactly N variables must be true | `2 of them` |
| `N of $prefix` | N `$prefix*` variables must be true | `1 of $wl` |
| `none of them` | No variables must be true (all false) | `none of them` |
| `none of $prefix` | No `$prefix*` variables must be true | `none of $fp` |
| `any of them` | At least one variable must be true | `any of them` |
| `any of $prefix` | At least one `$prefix*` variable must be true | `any of $browser` |

:::caution
When using aggregated conditions, you cannot control the exact order of variable evaluation. If evaluation order is critical for your logic, use explicit boolean expressions with parentheses instead.
:::

### Practical Condition Examples

```yaml
# All security matches must pass
condition: all of $sec_

# At least 2 out of 3 network indicators
condition: 2 of $net_

# No false positive indicators
condition: none of $fp_

# Primary match plus any secondary indicator
condition: $primary and any of $secondary_
```

## Rule Types

### Dependency Rules

**Purpose**: Reusable condition blocks that only execute when referenced.

```yaml
name: base.temporary.execution
type: dependency
matches:
  $tmp_exe: .data.exe.path ~= '^/tmp/'
  $tmp_ancestor: .data.ancestors ~= '\|/tmp/'
  $tmp_shm_exe: .data.exe.path ~= '^/dev/shm/'
  $tmp_run_exe: .data.exe.path ~= '^/run/'
condition: any of $tmp
```

**Characteristics:**
- ✅ Evaluated only when referenced by other rules
- ❌ `decision: include|exclude` is ignored
- ❌ `tags`, `severity`, `actions` are ignored
- ❌ Never produces output events

### Filter Rules

**Purpose**: Select which events to log in order to bring context to your detections.

```yaml
name: log.non.system.executions
type: filter
decision: include
match-on:
  events:
    kunai: [execve, execve_script]
matches:
  $system: .data.exe.path ~= '^/usr/(bin|sbin|lib)/'
  $common: .info.task.name ~= '^(systemd|dbus|network)'
condition: none of them
```

**Characteristics:**
- ✅ Outputs events whill have a `.filter` section to see matching filters
- ✅ Can use `decision: include|exclude`
- ✅ Supports most actions
- ❌ Cannot use `kill` action (use a detection rule to kill processes)
- ❌ No severity scoring

### Detection Rules

**Purpose**: Identify and flag suspicious/malicious activity.

```yaml
name: mimic.kthread
type: detection
meta:
    tags: [ 'os:linux' ]
    attack: [ T1036 ]
    authors: [ qjerome ]
    comments:
        - tries to catch binaries masquerading kernel threads
match-on:
    events:
        kunai: [execve, execve_script]
matches:
    $task_is_kthread: .info.task.flags &= '0x200000'
    $kthread_names: .info.task.name ~= '^(kworker)'
condition: not $task_is_kthread and $kthread_names
severity: 10
```

**Characteristics:**
- ✅ Adds `.detection` section to matching events
- ✅ Can use `decision: include|exclude`
- ✅ Supports all actions including `kill`
- ✅ Supports severity scoring (1-10)

## Rule Composition

Reference other rules using the `rule()` function. Kunai supports composing any type of rule (dependency, detection, or filter) within other rules, providing maximum flexibility in rule design.

```yaml
name: composite.rule
type: detection
matches:
  # Reference another rule's result
  $dependency: rule(base_condition)
  
  # Local match conditions
  $local_match: .data.exe.path == "/usr/bin/curl"
  
  # Additional context
  $context: .data.ancestors ~= '|/tmp/'
  
condition: $dependency and ($local_match or $context)
```

### Composition Best Practices

1. **Dependency rules for shared behavior**: Use `dependency` type rules for conditions that are shared between multiple filter and detection rules. This provides better organization and prevents duplication.

2. **Detection/filter dependencies**: While dependency rules are ideal for shared logic, you can also reference detection or filter rules directly. This is particularly useful for exclusion patterns where you want to depend on existing detection logic to handle false positives.

3. **Reuse common patterns**: Avoid duplicating frequent match conditions by extracting them into reusable dependency rules

4. **Layer complexity**: Build simple rules first, then compose them into more complex detection logic

5. **Test dependencies**: Verify dependency rules work correctly before using them in production rules

6. **Type flexibility**: Use the most appropriate rule type for each component in your composition

#### Rule Composition Strategy

```yaml
# ✅ Recommended: Shared conditions as dependency
name: shared.network.activity
type: dependency
matches:
  $external_ip: .data.dst.public == true
  $http: .data.dst.port == 80
  $https: .data.dst.port == 443
condition: $external_ip and any of $http

---

# ✅ Recommended: Detection using dependency
name: detect.suspicious.connection
type: detection
matches:
  $shared: rule(shared.network.activity)
  $trusted: .data.exe.path ~= '^/usr/(bin|sbin)/'
condition: $shared and not $trusted

---

# ⚠️ Advanced: Detection depending on detection (for FP handling)
name: suspicious.connection.exclude.false.positives
type: detection
matches:
  $broad_match: rule(detect.suspicious.connection)
  $whitelist: .data.exe.path == "/usr/bin/known-good"
condition: $broad_match and not $whitelist
```

### Loading Order 

Dependency rules must be loaded before the rules that reference them. Ensure proper ordering by:

1. **Same file**: Define dependency rules before rules that use them
2. **Multiple files**: Load files containing dependencies before files containing referencing rules

**Troubleshooting:** If you get "unknown rule" errors, check:
- Dependency rules are defined before they're referenced
- Files are loaded in the correct order
- Rule names are spelled consistently
- YAML document separators (`---`) are properly formatted

## Performance Optimization

### Rule Design Tips

1. **Early filtering**: Use `match-on` to narrow rule scope and enhance performance
2. **Order matters**: Put cheap matches first, expensive last
3. **Exclude first**: Filter known-good events with exclude rules
4. **Compose rules**: Reuse common conditions via dependencies
5. **Specific regex**: Avoid overly complex patterns
6. **Limit variables**: Use specific prefixes in aggregated conditions

### Evaluation Order Optimization

```yaml
# ✅ Good: Cheap match first
matches:
  $fast_check: .data.exe.path == "/usr/bin/curl"  # String equality
  $expensive_check: .data.ancestors ~= '.{100,}'   # Complex regex
condition: $fast_check and $expensive_check

# ❌ Avoid: Expensive match first
matches:
  $complex_regex: .data.command_line ~= '.*[a-zA-Z0-9]{50,}.*'
  $simple_check: .info.task.uid == 0
condition: $complex_regex and $simple_check
```

### Scan Efficiency

- **Reuse dependency rules**: Evaluated once, referenced multiple times
- **Limit rule scope**: Narrow `match-on` events
- **Avoid excessive variables**: Only define what you need
- **Use exclude rules**: Reduce events processed by include rules

## Troubleshooting

### Common Issues

**Rule not matching expected events:**
- Check `match-on` events list
- Verify field paths are correct
- Test regex patterns separately
- Review excluding rules

**Performance problems:**
- Review `match-on` scope (too broad?)
- Check for expensive regex patterns
- Look for unnecessary rule evaluations
- Consider using exclude rules

**Syntax errors:**
- Validate YAML structure
- Check operator usage
- Verify condition syntax
- Test with simple rules first

## Additional Resources

- [YAML Specification](https://yaml.org/spec/1.2.2/)
- [Regex Syntax](https://docs.rs/regex/latest/regex/#syntax)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Kunai Configuration with Rules](rule_configuration)
- [Kunai Configuration Guide](../configuration)
- [Kunai Event Documentation](../events)

## Syntax Quick Reference

```yaml
# Simple rule
name: simple.rule
match-on:
  events:
    kunai: [execve]
matches:
  $match: .data.exe.path == "/bin/sh"
condition: $match

# Complete rule with all options
name: comprehensive.rule
type: detection
decision: include
meta:
  tags: ['security', 'linux']
  attack: [T1059]
  authors: [team]
match-on:
  events:
    kunai: [execve, execve_script]
matches:
  $condition1: .field1 == "value1"
  $condition2: .field2 ~= 'pattern.*'
  $condition3: .field3 > 100
condition: $condition1 and ($condition2 or $condition3)
severity: 7
actions: [scan-files]
```

:::tip Disabling rules
Rules can be disabled by setting `params.disable: true` in the rule definition. This is useful for temporarily turning off rules without removing them from your configuration.
:::

This syntax reference provides everything needed to write effective Kunai rules, from basic structure to advanced patterns and optimization techniques.
