---
id: fmf-hooks-catalog
title: FMF hooks catalog (legacy)
slug: /reference/fmf-hooks-catalog
description: Redirect — native EventId → greg.* mapping now lives in GregNativeEventHooks; see greg hooks catalog.
---

<!-- Former auto-generated page; replaced — do not restore old HookNames tables. -->

# FMF hooks catalog (legacy)

The old table generated from **`HookNames.cs`** has been **removed**. Runtime mapping of numeric **`EventIds`** to canonical **`greg.*`** strings is centralized in **`GregNativeEventHooks`** (see **`GregCompatBridge`** for deprecated spellings).

## Current sources

| Topic | Where |
|-------|--------|
| **EventId → `greg.*` (FFI / native pipeline)** | [greg hooks catalog](./greg-hooks-catalog.md) — generated from `gregCore/framework/Sdk/GregNativeEventHooks.cs` and `EventIds` in `EventDispatcher.cs` |
| **Il2Cpp hook registry (JSON)** | `greg_hooks.json` at repo root; copied next to `gregCore.dll` on build |
| **`FMF.*` documentation policy** | [FMF hook naming](./fmf-hook-naming.md) — naming for new *documentation* IDs (not byte-for-byte every runtime string) |

## Regenerate the wiki table

From the **gregCore** repo (with **gregWiki** checked out **next to** **gregCore**):

```powershell
./tools/Generate-GregHookCatalog.ps1
```

Updates `gregWiki/docs/reference/greg-hooks-catalog.md`.

## See also

- [greg hooks catalog](./greg-hooks-catalog.md)
- [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events)
- [Greg hooks registry](./greg-hooks-registry.md)
