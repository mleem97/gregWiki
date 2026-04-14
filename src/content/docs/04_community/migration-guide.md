---
title: "Migration Guide: Standalone Mods to gregCore Plugins (WIP)"
sidebar_label: Migration Guide (WIP)
description: Migration path from ad-hoc Harmony mods to composable gregCore plugin architecture.
---

:::caution WIP
Migration templates are evolving while service contracts are finalized.
:::

## Migration Strategy

1. Replace direct Harmony patches with `greg.*` hooks where available.
2. Move data persistence into framework-backed persistence contracts.
3. Replace custom UI patching with centralized extension services.
4. Isolate language-runtime bridges behind official bridge interfaces.

## Recommended Refactor Order

- Event ingestion
- State model and persistence
- UI integration
- dispatch/automation and background jobs

## Compatibility Checklist

- Uses `greg.DOMAIN.EventName` hooks only.
- Avoids direct shop patching when composition layer exists.
- Defines save/load contract and recovery fallback.
- Declares cross-mod conflict assumptions.

## Existing Mod Families

- QuickBuilder-like automation mods.
- Shop/Color modifier mods.
- Dispatch and maintenance automation mods.
- Inventory/container extension mods.
