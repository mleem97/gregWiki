---
title: Greg hooks & event runtime
sidebar_label: Greg hooks & events
description: greg.* hooks, GregEventDispatcher, GregNativeEventHooks, greg_hooks.json, Rust FFI event ids, and compat aliases.
---

# Greg hooks & event runtime

Die Assembly **`FrikaModdingFramework.dll`** entsteht aus **`gregCore/framework/FrikaMF.csproj`** und bündelt Harmony-Patches, C#-Events (`GregEventDispatcher`), sowie die Rust-/Native-Bridge. Für Mod-Autor:innen sind im Wesentlichen **drei Flächen** relevant:

| Fläche | Zweck | Typischer Einstieg |
|--------|--------|---------------------|
| **`greg.*` Hook-Strings** | Kanonische Namen für Harmony-/Mod-Code; Registry in **`greg_hooks.json`**. | `GregEventDispatcher.On("greg....", handler, modId)` in **`gregFramework.Core`** |
| **Native Pipeline (`EventIds` → `greg.*`)** | Gleiche Spielmomente wie FFI-Events; zentral **`GregNativeEventHooks`**. | Konstanten / `Resolve(uint)` in **`gregFramework.Core.GregNativeEventHooks`** |
| **Legacy-Aliase** | Alte String-Schreibweisen → kanonisches **`greg.*`**. | **`GregCompatBridge`** (+ optional Einträge in **`greg_hooks.json`** `legacy`) |

Neue **öffentliche Dokumentations-IDs** folgen weiterhin **`FMF.<Domain>.*`** — siehe [FMF hook naming](/wiki/reference/fmf-hook-naming). Die **Laufzeit** für die native Kette ist **`greg.*`** wie in **`GregNativeEventHooks`** und **`greg_hooks.json`**.

## `greg_hooks.json` (Version 2)

| Pfad | Rolle |
|------|--------|
| **Repo-Root** `greg_hooks.json` | Quelle der Wahrheit: `name`, `patchTarget`, `strategy`, `payloadSchema`, optional `legacy`. |
| **Neben `FrikaModdingFramework.dll`** | Wird per `FrikaMF.csproj` aus dem Monorepo-Root kopiert, damit **`GregCompatBridge`** Legacy-Namen auflösen kann. |

Regenerieren: `gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1` bei geändertem Il2Cpp-/Interop-Stand.

## `GregEventDispatcher` / SDK

Implementierung: **`gregCore/framework/src/Sdk/GregEventDispatcher.cs`** (`namespace gregFramework.Core`). API: **`On` / `Once` / `Off` / `Emit`**, **`OnCancelable` / `InvokeCancelable`**, **`UnregisterAll(modId)`**.

Hook-Strings stabil mit **`GregHookName.Create(GregDomain.*, "Action")`** oder den **`GregNativeEventHooks.*`**-Konstanten bauen.

## Native Events (`EventIds`)

- **`EventIds`** und **`EventDispatcher`:** `gregCore/framework/src/ModLoader/EventDispatcher.cs` (Rust-kompatible numerische IDs).
- **Mapping → `greg.*`:** **`GregNativeEventHooks`** (`gregCore/framework/src/Sdk/GregNativeEventHooks.cs`); Emission über **`GregHookIntegration`** im selben ModLoader-Baum.
- **Katalog (Wiki):** [greg hooks catalog](/wiki/reference/greg-hooks-catalog) (Generator: `gregCore/tools/Generate-GregHookCatalog.ps1`).

## Rust FFI

Rust-/Native-Mods erhalten **numerische** Event-IDs; C# spiegelt dieselben Momente als **`greg.*`** über **`GregHookIntegration`**, sobald der Code läuft (auch ohne aktive FFI-Verbindung für die greg-Oberfläche). Bridge-Code: **`FfiBridge` / `FFIBridge`** unter `framework/src/ModLoader/`.

## MelonLoader-Einstiege (eine DLL)

Je nach Build können mehrere **`MelonMod`**-Typen in derselben Assembly liegen (z. B. Framework-Hauptplugin, AssetExporter-Pfade) — **`MelonInfo`** / **`MelonGame`** in den Quellen prüfen.

## Tooling

- **MCP:** `greg_hook_registry`, `greg_hook_search`, … mit `dataRoot` → **`gregCore/`** — [MCP server](/wiki/reference/mcp-server).
- **Legacy-Seite [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog)** verweist nur noch auf **`GregNativeEventHooks`** / greg-Katalog (kein `HookNames.cs` mehr).

## Siehe auch

- [Repository architecture](/wiki/framework/architecture)
- [FFI, hooks & Lua (Hub)](/wiki/topics/ffi-and-hooks/overview)
- [Getting started](/wiki/getting-started)
