---
id: greg-hooks-registry
title: greg.* hooks registry (IL2CPP)
slug: /reference/greg-hooks-registry
description: greg_hooks.json, Harmony-Quellen unter gregCore, Regeneration, Überschneidung mit Hand-Patches.
---

# greg.* hooks registry (IL2CPP)

Diese Seite beschreibt die **kanonische MelonLoader-Hook-Oberfläche** für *Data Center* (IL2CPP): stabile String-IDs, JSON-Registry, erzeugte Harmony-Stubs und das Zusammenspiel mit **handgeschriebenen** Patches (z. B. `HarmonyPatches.cs`).

## Kanonische Hook-IDs

```text
greg.<DOMAIN>.<Action>
```

- **`greg`** — fester Präfix für neue APIs.
- **`<DOMAIN>`** — u. a. aus **`GregDomain`** (`PLAYER`, `NETWORK`, `SYSTEM`, …).
- **`<Action>`** — `PascalCase`.

In Mods vorzugsweise **`GregHookName.Create(GregDomain.*, "Action")`** oder Konstanten aus **`GregNativeEventHooks`** verwenden.

### Lua-Zugriff auf dieselben Hooks

Lua-Skripte (MoonSharp, **`greg.*`**) können dieselben **`greg.*`**-Strings nutzen:

- **`greg.on(hookName, fn)`** — Callback am **`GregEventDispatcher`** (beliebige registrierte **`greg.*`**-Events).
- **`greg.hook.before(hookName, fn)`** / **`greg.hook.after(hookName, fn)`** — Harmony-Prefix bzw. -Postfix über den HookBinder (Patches parallel zur Registry).

Details zum Laufzeitmodell, Payloads und Katalog: [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events). API-Tabellen: [Language Bridges README](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/ModLoader/LanguageBridges/README.md).

## Registry-Datei `greg_hooks.json`

| Ort | Rolle |
|-----|--------|
| **Repo-Root** `greg_hooks.json` | Eincheckter Katalog (`name`, `patchTarget`, `strategy`, `payloadSchema`, optional `legacy`). |
| **Neben `gregCore.dll`** | Build-Kopie für **`GregCompatBridge`**. |

## Code-Layout (gregFramework-Repo)

| Pfad | Zweck |
|------|--------|
| **`gregCore/framework/Sdk/`** | **`gregFramework.Core`**: `GregEventDispatcher`, `GregHookName`, `GregDomain`, `GregPayload`, `GregCompatBridge`, **`GregNativeEventHooks`** |
| **`gregCore/framework/ModLoader/`** | `EventDispatcher`, `HarmonyPatches`, FFI, `GregHookIntegration`, Services |
| **`gregCore/framework/harmony/`** | Optional: generierte Domain-Harmony-Klassen (Skript **`Generate-GregHooksFromIl2CppDump.ps1`**) |

Das Projekt **`gregCore/framework/gregCore.csproj`** fasst diese Quellen zusammen; Harmony erkennt alle `[HarmonyPatch]`-Typen in der Assembly.

## Regeneration

```powershell
pwsh -NoProfile -File gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1
```

Anschließend **gregCore** neu bauen.

### Generator (Kurz)

- Emittiert Postfix-Stubs mit **`GregEventDispatcher.Emit`**, filtert häufige Unity-Loops und Lärm.
- **Harmony-Ausschluss:** Das Skript wertet **`framework/ModLoader/HarmonyPatches.cs`** aus, damit z. B. **`Player.UpdateCoin`** nicht doppelt generiert wird (Hand-Patch + **`InvokeCancelable`** / **`GregHookIntegration`**).

## Mod-Autor:innen

- [Greg hooks showcase](/wiki/guides/mod-developers/greg-hooks-showcase) — Beispielmod **`mods/GregShowcaseMod`**
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — **`FMF.*`**-Doku-Konvention
- [greg hooks catalog](/wiki/reference/greg-hooks-catalog) — **EventId → `greg.*`** (`GregNativeEventHooks`)
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — Hinweis/Redirect auf die neue Quelle

## Legacy

**`GregCompatBridge`** lädt **`legacy` → `name`** aus **`greg_hooks.json`**. Zusätzlich gibt es eingebaute Alias-Tabellen für ältere Schreibweisen — siehe Quellcode **`GregCompatBridge`**.

## Siehe auch

- [FFI, hooks & Lua](/wiki/topics/ffi-and-hooks/overview)
- [Framework architecture](/wiki/framework/architecture)
