---
title: Technician Management Guide (WIP)
sidebar_label: Technician Management Guide (WIP)
description: Bulk dispatch, priority queues, auto-dispatch, and manager-tier planning.
---

:::caution WIP
Dispatch features are partially available through hooks but lack unified orchestration contracts.
:::

## Planned Services

- `GregDispatchService`
- `GregEolJobListService`
- `GregEmployeeRegistry` (extended roles, manager tier)
- `GregJobListFilterService`

## Planned Hooks

- `greg.EMPLOYEE.BulkDispatchTriggered`
- `greg.EMPLOYEE.AutoDispatchEnabled`
- `greg.EOL.AllDevicesQueued`
- `greg.EOL.DevicePriorityChanged`

## Status

| Capability | Status |
| --- | --- |
| Basic employee lifecycle hooks | ✅ FULL |
| Priority queue dispatch | ❌ MISSING |
| Bulk queue all EOL devices | ❌ MISSING |
| Manager-tier orchestration | ❌ MISSING |
