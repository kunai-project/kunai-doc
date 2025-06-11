---
sidebar_position: 1000
---

# Error

This event is generated when **Kunai** encounters an error. It provides detailed information about the error, including its code, message, and context. The `error` event helps in diagnosing and resolving issues effectively by surfacing critical details.

## Example JSON

Below is a sample JSON payload for an error event:

```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/timeout",
    "command_line": "bash -ec \"trash=/tmp/trash; mkdir -p $trash; while [ true ]; do t=$(mktemp -d -p $trash); for i in {0..100000}; do echo \\\"AHHHH\\\" > $t/test$i.txt; done && rm -rf $t; done\"",
    "exe": {
      "path": "/usr/bin/bash"
    },
    "code": 1,
    "message": "throttle filesystem events, per task limit reached"
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 1000,
      "name": "error",
      "uuid": "9e8653aa-9743-7696-9b99-5a6a6ffc0403",
      "batch": 1074
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-01-17T14:16:33.661432510Z"
  }
}
```

## Additional Details

### Why This Event Matters
The `error` event is essential for:
1. **Debugging**: Pinpoints the exact issue by providing an error code and message.
2. **Performance Optimization**: Highlights cases where thresholds are breached, such as excessive file system events.
3. **Root Cause Analysis**: Provides process ancestry and command-line context to trace back the source of the issue.

### Throttling Mechanisms
Kunai includes **throttling mechanism**, which are specifically designed to mitigate **critical event** loss. These mechanisms dynamically reduce the logging of excessively frequent events (such as file system events), balancing the system's monitoring capacity and performance.

### Key Fields Explained
#### `.data.code`
- Numeric code representing the error type. For example:
  - `1`: Per-task threshold reached.
  - `2`: Global threshold reached.

#### `.data.message`
- A descriptive message explaining the error.


