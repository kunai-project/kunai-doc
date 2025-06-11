---
sidebar_position: 1100
---

# Event Loss

This event is generated when **Kunai** detects that some events are lost between the kernel and Kunai userland. It reflects a scenario where the event monitor cannot keep up with the kernel's pace. Such occurrences are inevitable when Kunai is configured to log very frequent events, such as file system activities (`read`, `write`, `file_created`, `file_unlink`, etc.). While these events are valuable for detailed analysis, the high frequency may lead to unavoidable losses.

:::tip
Event loss was always possible since kunai `v0.1.0` this event is just here to bubble up event loss information into your favorite log storage.
:::

## Example JSON

Below is a sample JSON payload for an `event_loss`:

```json
{
  "data": {
    "read": 75790,
    "lost": 118,
    "eps": 3568.562744844481
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1100,
      "name": "event_loss",
      "uuid": "41fa8404-77b0-4971-a020-1b59f41619bb",
      "batch": 1076
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-01-17T14:16:35.430136639Z"
  }
}
```

## Additional Details

### Why This Event Matters
The `event_loss` event highlights:
1. **System Performance Limits**: Indicates situations where the userland application cannot match the kernel's event generation rate.
2. **Configuration Impact**: Emphasizes the importance of balanced configurations to minimize event loss while capturing essential data.
3. **Monitoring Integrity**: Provides a clear signal when event loss occurs, allowing administrators to adjust logging settings or analyze performance bottlenecks.

### Throttling Mechanisms
Kunai includes **throttling events**, such as those reported in [`error` events](./error), which are specifically designed to mitigate **critical event** loss. These mechanisms dynamically reduce the logging of excessively frequent events, balancing the system's monitoring capacity and performance.

### Key Fields Explained
#### `.data.read`
- The total number of events successfully processed by Kunai in the userland.

#### `.data.lost`
- The total number of events that were lost.

#### `.data.eps`
- The rate of events processed per second, measured during the loss incident.


