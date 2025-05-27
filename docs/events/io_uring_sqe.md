---
sidebar_position: 100
---
# IO Uring SQE
This event is generated when **Kunai** detects a submission queue entry (SQE) in the io_uring subsystem. The io_uring subsystem is a Linux kernel feature that provides an asynchronous I/O interface, allowing applications to perform I/O operations without blocking the calling thread. This event captures details about the operation being submitted.

## Example JSON
Below is a sample JSON payload for an `io_uring_sqe`:
```json
{
  "data": {
    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",
    "command_line": "./io_uring /tmp/out.txt",
    "exe": {
      "path": "/bogus/path/io_uring"
    },
    "op": {
      "code": 23,
      "name": "IORING_OP_WRITE"
    }
  },
  "info": {
    "host": "...",
    "event": {
      "source": "kunai",
      "id": 100,
      "name": "io_uring_sqe",
      "uuid": "6ed7d734-1a64-9541-8c5f-cc587ed4f5e0",
      "batch": 9
    },
    "task": "...",
    "parent_task": "...",
    "utc_time": "2025-05-27T14:29:10.077239078Z"
  }
}
```
## Additional Details
### Why This Event Matters
The `io_uring_sqe` event highlights:
1. **Asynchronous I/O Operations**: Indicates the use of advanced I/O mechanisms that can significantly improve performance in applications dealing with high I/O loads.
2. **Operation Details**: Provides insights into the specific operations being performed, which can be crucial for debugging and performance tuning.
3. **Security Monitoring**: Helps in monitoring potentially malicious activities that leverage high-performance I/O operations.

### Key Fields Explained
#### `.data.ancestors`
- The process ancestry, showing the sequence of parent processes leading to the current process.
#### `.data.command_line`
- The command line used to invoke the executable.
#### `.data.exe.path`
- The path to the executable being run.
#### `.data.op.code`
- The operation code for the io_uring operation.
#### `.data.op.name`
- The name of the io_uring operation.