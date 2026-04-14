---
title: Environment Control Guide (WIP)
sidebar_label: Environment Control Guide (WIP)
description: Temperature, cooling, sensors, CCTV, and environment safety architecture.
---

:::caution WIP
This track merges `B-62e`, `B-77`, and related power/cooling requests.
:::

## Scope

- Temperature and overheat lifecycle per rack zone.
- Cooling devices as explicit power consumers.
- Security and safety sensors (water, smoke, keycard, biometric, CCTV).
- Operational alerts for environment thresholds.

## Planned Services

- `GregTemperatureService`
- `GregPowerManagementService`
- `GregWorldObjectPlacementService`

## Planned Hooks

- `greg.SYSTEM.SecuritySensorTriggered`
- `greg.SERVER.OverheatWarning`
- `greg.SERVER.OverheatShutdown`

## Status

| Capability | Status |
| --- | --- |
| Sensor orchestration framework | ❌ MISSING |
| Cooling and thermal simulation | ⚠️ PARTIAL IN GAME |
| CCTV and security placement flow | ❌ MISSING |
| Overheat warning/shutdown hooks | ❌ MISSING |
