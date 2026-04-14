---
title: Mod Conflict Resolution (WIP)
sidebar_label: Mod Conflict Resolution (WIP)
description: Root-cause and framework-level mitigation strategy for known mod conflicts.
---

:::caution WIP
Conflict mapping is updated per release and per known mod interaction reports.
:::

## Conflict Matrix

| Conflict | Root Cause | Framework Resolution | Status |
| --- | --- | --- | --- |
| Rust bridge vs color mods | Multiple independent shop/runtime patches | Official `GregRustPluginBridge` + one shop composition path | ❌ MISSING |
| Shop patch collisions | Direct patching of same UI methods | `GregShopExtensionService` | ❌ MISSING |
| Trolley transform loop load | High-frequency object checks + workaround loops | `GregTrolleyConfigService` + container registry batch updates | ❌ MISSING |
| IL2CPP postfix instability | Fragile postfix patterns in selected runtime methods | Prefer prefix-safe interception + documented patch templates | ⚠️ PARTIAL |
| Save/reload data loss | No shared persistence contract | `GregModPersistenceService` lifecycle contract | ❌ MISSING |

## Migration Rule

When a framework composition service exists, direct Harmony patching on that domain is treated as legacy-only and should be phased out.
