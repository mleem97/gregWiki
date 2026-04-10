---
id: fmf-hooks-catalog
title: FMF hooks catalog (legacy)
slug: /reference/fmf-hooks-catalog
description: Redirect — native EventId → greg.* mapping now lives in GregNativeEventHooks; see greg hooks catalog.
---

<!-- Former auto-generated page; content replaced — do not restore old HookNames tables. -->

# FMF hooks catalog (legacy)

Die frühere, aus **`HookNames.cs`** generierte Tabelle wurde **entfernt**. Die Laufzeit mappt numerische **`EventIds`** heute zentral über **`GregNativeEventHooks`** auf kanonische **`greg.*`**-Strings (siehe auch **`GregCompatBridge`** für veraltete Schreibweisen).

## Aktuelle Quellen

| Thema | Wo |
|--------|-----|
| **EventId → `greg.*` (FFI / natives Pipeline)** | [greg hooks catalog](./greg-hooks-catalog.md) — generiert aus `gregCore/framework/src/Sdk/GregNativeEventHooks.cs` und `EventIds` in `EventDispatcher.cs` |
| **Il2Cpp-Hook-Registry (JSON)** | `greg_hooks.json` im Repo-Root; Kopie neben `FrikaModdingFramework.dll` beim Build |
| **Doku-Politik `FMF.*`** | [FMF hook naming](./fmf-hook-naming.md) — Namenskonvention für neue *Dokumentations*-IDs (nicht 1:1 jedes Runtime-Strings) |

## Katalog neu erzeugen

Im **gregCore**-Repo (gregWiki-Checkout liegt typischerweise **nebendran**):

```powershell
./tools/Generate-GregHookCatalog.ps1
```

Aktualisiert `gregWiki/docs/reference/greg-hooks-catalog.md`.

## Siehe auch

- [greg hooks catalog](./greg-hooks-catalog.md)
- [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events)
- [Greg hooks registry](./greg-hooks-registry.md)
