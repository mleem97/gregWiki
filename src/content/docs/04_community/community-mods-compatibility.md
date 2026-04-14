---
title: Community Mods Compatibility (WIP)
sidebar_label: Community Mods Compatibility (WIP)
description: Compatibility matrix for community mods against current gregCore capability.
---

:::caution WIP
This matrix is continuously updated against `gregCore` and hook catalog changes.
:::

## Scope

This page tracks **A-01..A-11** and classifies each mod by implementation readiness.

| ID | Mod | Status | Already Available | Missing For Full Support |
| --- | --- | --- | --- | --- |
| A-01 | QuickBuilder | ⚠️ PARTIAL | Network/rack hooks, basic customer/server hooks | Batch wire + SFP fill + robust save/reload contracts |
| A-02 | Faster QSFP Modules | ⚠️ PARTIAL | `GregNetworkCompatibilityService` | Typed module schema, switch/module/cable compatibility policy |
| A-03 | TrashCleaner | ⚠️ PARTIAL | `greg.SYSTEM.oveSpawnedItemRemoved` | Item classifier + cleanup orchestration service |
| A-04 | Custom Colour Items Saver | ⚠️ PARTIAL | Color picker and shop hooks | `GregColorRegistry`, preset lifecycle, cable color extraction abstraction |
| A-05 | Extra Hire | ⚠️ PARTIAL | `GregEmployeeRegistry`, hire/fire hooks | Persistent scaling rules, reload-safe dispatch state |
| A-06 | SysAdmin | ⚠️ PARTIAL | Broken/repaired hooks | Official rust bridge + unified dispatch/settings service |
| A-07 | EOL-Sorter | ⚠️ PARTIAL | EOL-related state hooks | Dedicated EOL sort service and queue integration contract |
| A-08 | NoMoreEOL | ❌ MISSING | Low-level EOL state hooks | Official policy override API with compatibility safeguards |
| A-09 | Shop Menu Fix + Mod Delete | ❌ MISSING | Shop and interaction hooks | Shop composition API + world delete policy API |
| A-10 | RGB Walls Mod | ⚠️ PARTIAL | `greg.SYSTEM.ButtonBuyWall` | Global world color service with persistence |
| A-11 | Big Trolley Mod | ❌ MISSING | Runtime object/trolley hooks | Container registry, trolley config override, performance-safe batch state setter |

## Migration Priority

1. A-01 / A-04 / A-06 (cross-mod conflict reduction)
2. A-08 / A-09 / A-11 (missing platform capabilities)
3. A-02 / A-05 / A-10 / A-07 (quality and UX stabilization)
