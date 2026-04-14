---
title: Server Builder Guide (WIP)
sidebar_label: Server Builder Guide (WIP)
description: Blueprint-driven custom server assembly, component registries, and component-level EOL planning.
---

:::caution WIP
Blueprint/component APIs are not yet implemented in full and are currently roadmap targets.
:::

## Planned Core Components

- `GregServerBlueprintService`
- `GregServerComponentRegistry`
- `GregServerTierRegistry`
- `GregDispatchService` (build/install jobs)
- `GregShopExtensionService` (preconfigured server slots)

## Planned Hooks

- `greg.SERVER.ComponentFailed`
- `greg.SERVER.ComponentReplaced`
- `greg.SERVER.BlueprintApplied`
- `greg.SERVER.CustomBuilt`
- `greg.SERVER.IopsCapacityChanged`

## Status

| Capability | Status |
| --- | --- |
| Tier registry baseline | ❌ MISSING |
| Blueprint storage and apply | ❌ MISSING |
| Component-level EOL | ❌ MISSING |
| Technician-driven server assembly | ❌ MISSING |
