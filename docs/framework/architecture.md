---
title: Repository architecture
sidebar_label: Repository architecture
description: Current multi-repo layout with `gregFramework` as a local wrapper and clear repository boundaries.
---

## Modding languages

gregCore supports **three modding languages** through its Language Bridge system:

| Language | Bridge | Runtime | Mod format |
|----------|--------|---------|------------|
| **C#** | MelonLoader / .NET | Direct IL2CPP interop | `.dll` assemblies in `Mods/` |
| **Lua** | `LuaLanguageBridge` (MoonSharp VM) | `greg.*` API with handle-based Unity access | `.lua` scripts in `Mods/ScriptMods/lua/` |
| **Rust / native** | `RustLanguageBridgeAdapter` → `FFIBridge` | C ABI exports (`mod_init`, `mod_update`, `mod_on_event`) | `.dll`/`.greg` in `Mods/RustMods/` |

**Lua scripts** interact with the game exclusively through the `greg.*` API surface — a set of C#-backed modules that expose Unity/IL2CPP operations via integer handles. This includes `greg.unity.*` (object manipulation), `greg.on()`/`greg.hook.*` (event and Harmony patch subscriptions), `greg.gui.*` (IMGUI), `greg.io.*` (file system), and `greg.input.*` (keyboard). See [Greg hooks & events](/wiki/framework/greg-hooks-and-events) for the event API and the [Language Bridges README](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/ModLoader/LanguageBridges/README.md) for the full Lua API reference.

**Rust/native mods** receive a `GameAPITable` function-pointer table on `mod_init` and numeric `EventIds` via `mod_on_event`. The `FFIBridge` handles shadow-copying, lifecycle dispatch, and hot-reload.

Policy details: [Modding language support](/wiki/reference/modding-language-requirement).

## Target runtime layers

Above the raw repositories, the **logical** model is **ModManager → Framework → Plugins → Mods** (see [System architecture & documentation principles](/wiki/meta/system-architecture-principles)):

| Layer | Role | Repo / folder |
|--------|--------|----------------|
| **ModManager** | MAUI front-end: manage mods/plugins, surface game status; talks to the framework through defined interfaces. | `gregModmanager/` |
| **Framework (SDK)** | Hooks, events, versioning, logging; bridge to IL2CPP / MelonLoader. | `gregCore/` |
| **Plugins** | Framework extensions (`FFM.Plugin.*`). | `gregExt.<Name>/` |
| **Mods** | User mods (`FMF.*`). | `gregMod.<Name>/` |

## On-disk repositories

| Layer | Role |
| ------ | ------ |
| **Wrapper** | `gregFramework/` holds local checkouts of individual repositories. |
| **Core** | `gregCore/` — **framework core**: translation, hooks, Harmony/event runtime, MCP, templates, and related core features. |
| **Language Bridges** | `gregCore/framework/ModLoader/LanguageBridges/` — Lua (MoonSharp), TypeScript/JS (planned), Rust/native (`FFIBridge`). Lua modules under `LuaModules/` provide the `greg.*` API. |
| **Rust / native FFI** | Loads native mod exports: `gregCore/framework/ModLoader/FfiBridge.cs`; adapter: `RustLanguageBridgeAdapter.cs`. Full lifecycle: init, update, scene load, event dispatch, shutdown. |
| **Mods** | `gregMod.<Name>/` — one repo each, directly under `gregFramework/`. |
| **Extensions** | `gregExt.<Name>/` — one repo each, directly under `gregFramework/`. |
| **Docs** | `gregWiki/` — documentation site repository. |

## Hook registry

Hook naming and the registry are owned by core; when repos split, **core** remains the source of truth.

## Tools

- **Core tools:** `gregCore/tools/`
- **MCP runtime:** `gregCore/mcp-server/`
- **Hook / mapping utilities:** also under core tools, versioned with the core repo.

## Steam & Workshop

Workshop templates and deployment scripts live in the core repo under `gregCore/Templates/` and `gregCore/scripts/`.

## Lua handle system

Lua cannot hold direct references to Il2Cpp objects. gregCore uses an **integer handle registry** (`LuaObjectHandleRegistry`) that maps `int` handles to live .NET objects via weak references. Lua scripts receive handles from `greg.unity.find()`, `greg.unity.get_component()`, etc. and pass them back to `greg.unity.*` functions. Handles are automatically pruned when the underlying Unity objects are destroyed.
