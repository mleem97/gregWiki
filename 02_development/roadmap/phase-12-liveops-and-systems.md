---
title: "Phase 12: LiveOps and System Management"
sidebar_label: "Phase 12 (WIP)"
description: WIP phase for player hardware, staff operations, tracking dashboards, environment control, and game-level compatibility tracks.
---

:::caution WIP
This phase absorbs Batch 3 requests (`B-55..B-83`) that are not solved by previous phases.
:::

## Scope

- Player hardware and MacroLeft terminal flow.
- Staff leveling, certifications, and auto-rule assignment.
- Advanced network management (LACP/MLAG/uplink/fiber prep).
- Environment control and security sensors.
- Asset tracking and source-of-truth dashboards.
- Multiplayer readiness and game-level planned features tracking.

## Key Deliverables

- `GregPlayerHardwareRegistry`
- `GregEmployeeCertificationRegistry`
- `GregTemperatureService`
- `GregAssetTrackingService` (tracking domain contract)
- `GregTerminalUIExtension` advanced dashboards
- `GregGameModeRegistry` feature toggles and stage progression contracts

## Planned Hook Pack

- `greg.SYSTEM.PlayerHardwareUpgraded`
- `greg.EMPLOYEE.LevelUp`
- `greg.EMPLOYEE.CertificationEarned`
- `greg.NETWORK.UplinkPortConnected`
- `greg.CUSTOMER.ContractExpired`
- `greg.SERVER.AssetTagAssigned`
- `greg.SYSTEM.AssetInventoryExported`
- `greg.SYSTEM.FeatureToggled`

## Exit Criteria

- Batch 3 requests are mapped to either implemented services or explicit game-level compatibility docs.
- Dashboard and tracking contracts are stable for plugin authors.
- Environment/sensor architecture and hooks are documented and testable.
- Multiplayer readiness rules are formalized in architecture docs.
