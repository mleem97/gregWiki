---
title: Framework
sidebar_label: Framework
---

**Languages:** gameplay and script mods can be written in **C#**, **Lua** (MoonSharp, `greg.*` API), or **Rust / native** (FFI) — see [Modding language support](/wiki/reference/modding-language-requirement). **Lua API reference** (events, hooks, Unity handles, I/O): [Language Bridges README](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/ModLoader/LanguageBridges/README.md).

**Stack position:** gameplay **mods** sit on top of **plugins** and the **framework SDK**; the **ModManager** (MAUI) is the out-of-game front-end — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

The core runtime ships as **`gregCore.dll`** (MelonLoader loads this assembly; not a legacy **`FrikaModdingFramework.dll`** name). It provides:

- Harmony patch integration for gameplay hooks
- Event dispatch and stable event contracts (`greg.*`)
- Language bridges (C# direct, **Lua** via `LuaLanguageBridge`, **Rust** via `FFIBridge` / `RustLanguageBridgeAdapter`)
- Shared game API abstractions for mod authors (C# SDK and Lua `greg.*` modules)

## Core references

- [FMF hooks (generated)](/wiki/framework/fmf-hooks) — hook surface and categories (deklarativ; kann der JSON-Registry folgen)
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — **`FMF.*`** Doku-Konvention
- [greg hooks catalog](/wiki/reference/greg-hooks-catalog) — **EventId → `greg.*`** (`GregNativeEventHooks`, generiert)
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — short redirect (replaces old `HookNames`)
- [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry) — `greg_hooks.json`, Generator, Harmony-Deduplizierung
- [Framework architecture](/wiki/framework/architecture) — runtime layout and bridges
