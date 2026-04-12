---
title: Custom Content Guide (WIP)
sidebar_label: Custom Content Guide (WIP)
description: Readiness and integration model for custom 3D assets and interactable world content.
---

:::caution WIP
Asset-side readiness assumes model and game runtime constraints may require dev-side support.
:::

## C/E Asset Readiness Matrix

| ID Range | Domain | Status |
| --- | --- | --- |
| C-01..C-10 | Paint, carts, labels, server visuals, cleanup tools | ❌ MISSING |
| C-11..C-21 | Power and infra assets (UPS/Generator/DHCP/Terminal/Warehouse/Converters) | ❌ MISSING + 🎮 GAME-LEVEL |
| C-22..C-27 | Blank panels, blade server assets, wire tracer tool | ❌ MISSING |

## Registry Targets

- `GregInteractableItemRegistry`
- `GregWorldObjectPlacementService`
- `GregInventoryContainerRegistry`
- `GregPowerManagementService`
- `GregServerComponentRegistry`

## Model Integration Rules

- Keep data model separate from render prefab implementation.
- Define item/category IDs before asset import.
- Define interaction rules (proximity, keybind, target type).
- Define save/load mapping for all placeable assets.

