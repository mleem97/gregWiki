---
id: modding-language-requirement
title: Modding language support
slug: /reference/modding-language-requirement
description: Supported languages for mods, MelonLoader plugins, and extensions — C#, Lua, and Rust/native.
---

# Modding language support

## Supported languages

gregCore supports **three modding languages** through its Language Bridge system:

| Language | Runtime | Mod location | Best for |
|----------|---------|-------------|----------|
| **C#** | MelonLoader / .NET (direct IL2CPP interop) | `Mods/*.dll` | Plugins, deep framework extensions, performance-critical code |
| **Lua** | MoonSharp VM in `LuaLanguageBridge` | `Mods/ScriptMods/lua/<modname>/` | Gameplay mods, UI overlays, event-driven logic, rapid prototyping |
| **Rust / native** | `FFIBridge` (C ABI) | `Mods/RustMods/*.dll` or `.greg` | Native performance, existing Rust codebases |

## C# (primary)

All logic for MelonLoader plugins and framework extensions ships in **C#** (`.NET` compatible with MelonLoader). This is the traditional path and gives direct access to Harmony, IL2CPP interop, and all Unity APIs.

## Lua

Lua scripts run inside gregCore's **MoonSharp VM** and interact with the game through the `greg.*` API:

- **`greg.unity.*`** — handle-based Unity object manipulation (FindObjectsOfType, GetComponent, Instantiate, TMPro, TextMesh, Transform, Material, Physics)
- **`greg.on()` / `greg.hook.before()` / `greg.hook.after()`** — subscribe to game events and Harmony patches
- **`greg.gui.*`** — IMGUI drawing (OnGUI)
- **`greg.io.*`** — file system access
- **`greg.input.*`** — keyboard input
- **`greg.config.*`** — key=value config files
- **`greg.color.*`** — hex color utilities

Lua mods are deployed as `.lua` files under `Mods/ScriptMods/lua/`. They do not require compilation or IL2CPP assemblies. gregCore discovers and loads them automatically.

**Lifecycle:** Lua scripts define optional global functions `on_update(dt)`, `on_scene(name)`, and `on_gui()` that gregCore calls at the appropriate Unity lifecycle points.

**Example:** [FMF.HexLabelMod](/wiki/mods/fmf-hex-label-mod) is a pure Lua mod (~300 lines) that uses `greg.unity.*` and `greg.hook.*` to add hex color labels to game objects.

## Rust / native

Native mods (Rust, C, C++) are loaded by `FFIBridge` and communicate through a C ABI:

- `mod_info()` — returns mod metadata
- `mod_init(api_table)` — receives a `GameAPITable` with function pointers
- `mod_update(dt)` — called per frame
- `mod_on_scene_loaded(name)` — scene transitions
- `mod_on_event(id, data, size)` — game events (numeric `EventIds`)
- `mod_shutdown()` — cleanup

The `RustLanguageBridgeAdapter` fully delegates lifecycle calls to `FFIBridge`, including hot-reload support for non-DLL formats (`.greg`, `.gregr`).

## Rationale

- **C#** remains the primary language because MelonLoader, Harmony, and IL2CPP interop are built around it.
- **Lua** lowers the barrier for mod authors who don't want to set up a C# build chain. The `greg.*` API handles all Il2Cpp bridging safely.
- **Rust/native** serves performance-critical use cases and mods already written in Rust.
- A single framework (`gregCore`) manages all three runtimes, keeping reviews, debugging, and CI consistent.

## See also

- [Repository architecture](/wiki/framework/architecture) — language bridges and handle system
- [Greg hooks & events](/wiki/framework/greg-hooks-and-events) — Lua event subscriptions
- [System architecture & documentation principles](/wiki/meta/system-architecture-principles) — stack model
- [Framework](/wiki/mods/framework) — runtime surface for mod authors
