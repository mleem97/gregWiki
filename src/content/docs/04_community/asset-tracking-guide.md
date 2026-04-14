---
title: Asset Tracking Guide (WIP)
sidebar_label: Asset Tracking Guide (WIP)
description: Source-of-truth inventory, asset tags, and event-driven tracking logs.
---

:::caution WIP
This page covers `B-78` and `B-79` as a unified observability and inventory domain.
:::

## Scope

- In-game spreadsheet/export view for rack, IP, and patch mapping.
- Persistent asset tags with lifecycle logs.
- Inventory diff visibility after moves/removals.

## Planned Services

- `GregFloorplanService`
- `GregTerminalUIExtension`
- `GregModPersistenceService`

## Planned Hooks

- `greg.SYSTEM.AssetInventoryExported`
- `greg.SERVER.AssetTagAssigned`
- `greg.SERVER.AssetRemovedFromInventory`

## Status

| Capability | Status |
| --- | --- |
| Floorplan data baseline | ⚠️ PARTIAL IN CORE |
| Spreadsheet/terminal tracking view | ❌ MISSING |
| Asset tag persistence and audit log | ❌ MISSING |
