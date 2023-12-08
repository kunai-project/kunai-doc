---
slug: cheap-siem-for-linux
title: A cheap SIEM for Linux
authors: [quentin]
tags: []
date: 2023-11-10T13:37
---


```yaml
name: fake.kworker
match-on:
  events:
    kunai: [1]
matches:
  $task_is_kthread: /info/task/flags &= '0x00200000'
  $task_name: /info/task/name ~= '(?i:kworker)'
  $ptask_is_kthread: /info/parent_task/flags &= '0x00200000'
  $ptask_name: /info/parent_task/name ~= '(?i:kworker)'
condition: '(!$task_is_kthread && $task_name) || (!$ptask_is_kthread && $ptask_name)'
severity: 10
```