---
title: Multiplayer Troubleshooting (WIP)
sidebar_label: Multiplayer Troubleshooting (WIP)
description: Diagnostics and recovery steps for relay sessions, state desync, and host/client multiplayer issues.
---

:::caution WIP
Troubleshooting applies to the planned gregCore multiplayer implementation for **Data Center (Waseku)**.
:::

## Quick Triage

1. Verify all clients use same mod versions and same `gregCore` build.
2. Validate relay reachability and session code validity.
3. Check host/client logs for action deny/correction loops.
4. If desync persists, force snapshot re-sync.

## Common Symptoms

### Join fails

- Check relay URL/port
- Check session code expiration
- Check version compatibility between host and client

### Players visible but interactions diverge

- Usually authority mismatch or missing correction application
- Confirm host is sole source for rack/cable/customer mutations

### Cable states differ between peers

- Confirm only connection topology is synced (not local rope physics)
- Trigger state correction from host

### Route/IOPS mismatch

- Ensure route evaluation is host-only
- Broadcast deterministic route result payload and hash

## Log Signals to Collect

- Relay connect/disconnect timestamps
- Session join/leave packets
- Action request/grant/deny traces
- Snapshot sent/received markers
- State correction frequency

## Escalation Checklist

- Reproduce with 2 players first
- Isolate to one subsystem (player/rack/cable/customer)
- Capture minimal packet trace + corresponding log window
- Document deterministic repro steps before patching
