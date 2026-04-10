---
title: FFI, hooks & Lua
sidebar_label: FFI, hooks & Lua (hub)
description: FFI, hook lists, Lua runtime, naming — curated reference for mod and plugin authors.
---

# FFI, hooks & Lua

The framework acts as a **hook proxy**: Unity / IL2CPP events are surfaced as **stable framework events** for mods in all supported languages — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

## Hook & event references

- [FMF hooks](/wiki/framework/fmf-hooks) — generated hook surface
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — strings from core sources
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — `FMF.*` vs legacy `FFM.*`
- [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry) — `greg_hooks.json`, `Greg*Hooks` Harmony emitters, regeneration script
- [Greg hooks & events](/wiki/framework/greg-hooks-and-events) — `GregEventDispatcher`, Lua subscriptions, native pipeline

## Lua runtime

gregCore embeds a **MoonSharp** Lua VM (`LuaLanguageBridge`) that provides the `greg.*` API to Lua scripts:

| API group | Key functions | Purpose |
|-----------|--------------|---------|
| **Events** | `greg.on(hook, fn)`, `greg.off(hook)`, `greg.emit(hook, data)` | Subscribe to `GregEventDispatcher` events |
| **Harmony hooks** | `greg.hook.before(hook, fn)`, `greg.hook.after(hook, fn)` | Prefix/postfix on any Harmony-patched method |
| **Unity objects** | `greg.unity.find(type)`, `get_component()`, `instantiate()`, `destroy()` | Handle-based Il2Cpp object manipulation |
| **Properties** | `greg.unity.get_string(h, m)`, `set_number()`, `get_handle()` | Read/write object members by name |
| **Transform** | `greg.unity.position(h)`, `set_position()`, `set_local_scale()` | Spatial manipulation |
| **Materials** | `greg.unity.material_hex(h, prop)` | Read hex color from material properties |
| **TMPro / TextMesh** | `greg.unity.tmpro_set(...)`, `textmesh_set(...)` | Configure text labels |
| **Physics** | `greg.unity.raycast(...)`, `camera_ray()` | Raycasting |
| **IMGUI** | `greg.gui.box()`, `label()`, `button()`, `toggle()` | OnGUI drawing |
| **Input** | `greg.input.key_pressed(key)`, `key_down()`, `ctrl()` | Keyboard via InputSystem |
| **File I/O** | `greg.io.read_file()`, `write_file()`, `list_files()` | File system access |
| **Config** | `greg.config.load(path)`, `save()` | Key=value config files |
| **Color** | `greg.color.to_hex(r,g,b)`, `normalize_hex()`, `parse()` | Hex color utilities |

Lua scripts define optional lifecycle functions: `on_update(dt)`, `on_scene(name)`, `on_gui()`.

Full API reference: [Language Bridges README](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/ModLoader/LanguageBridges/README.md)

## Rust / native FFI

Native mods receive a `GameAPITable` on init and numeric `EventIds` via `mod_on_event`. Full lifecycle (update, scene load, shutdown) is managed by `FFIBridge` through `RustLanguageBridgeAdapter`.

## Architecture

- [Repository architecture](/wiki/framework/architecture) — language bridges, handle system, runtime layers
- [Modding language support](/wiki/reference/modding-language-requirement) — C#, Lua, Rust policies
- [Getting started](/wiki/getting-started)
