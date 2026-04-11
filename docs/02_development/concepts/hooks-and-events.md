---
title: Greg hooks & event runtime
sidebar_label: Greg hooks & events
description: greg.* hooks, GregEventDispatcher, GregNativeEventHooks, greg_hooks.json, Rust FFI event ids, and compat aliases.
---

# Greg hooks & event runtime

The **`gregCore.dll`** assembly is built from **`gregCore/gregCore.csproj`** and combines Harmony patches, C# events (`gregEventDispatcher`), and the Rust/native bridge. Mod authors mainly care about **three surfaces**:

| Surface | Role | Typical entry |
|---------|------|----------------|
| **`greg.*` hook strings** | Canonical names for Harmony/mod code; registry in **`greg_hooks.json`**. | `gregEventDispatcher.On("greg....", handler, modId)` in **`gregSdk`** |
| **Native pipeline (`EventIds` → `greg.*`)** | Same gameplay moments as FFI events; centralized in **`gregNativeEventHooks`**. | Constants / `Resolve(uint)` on **`gregSdk.gregNativeEventHooks`** |
| **Legacy aliases** | Old spellings → canonical **`greg.*`**. | **`gregCompatBridge`** |

## `greg_hooks.json` (version 2)

| Path | Role |
|------|------|
| **Repo root** `greg_hooks.json` | Source of truth for Unity-to-Greg mapping. |
| **Next to `gregCore.dll`** | Copied from the root on build. |

## `gregEventDispatcher` / SDK

Implementation: **`gregCore/gregSdk/gregEventDispatcher.cs`** (`namespace gregSdk`). API: **`On` / `Once` / `Off` / `Emit`**.

## Lua event & hook subscriptions

Lua scripts subscribe to the same event surfaces through the `greg.*` API:

| Lua API | C# backend | Purpose |
|---------|-----------|---------|
| `greg.events.on(hookName, fn, modId)` | `gregEventDispatcher.On()` | Subscribe to any `greg.*` event. |
| `greg.events.on_update(fn)` | `LuaLanguageBridge.OnUpdate()` | Register dynamic update loop. |
| `greg.events.on_gui(fn)` | `LuaLanguageBridge.OnGui()` | Register dynamic GUI loop. |

**Example** — listen to game events:

```lua
greg.events.on("greg.PLAYER.CoinChanged", function(payload)
    local delta = greg.payload.get(payload, "Delta", 0)
    greg.log("coins changed by " .. tostring(delta))
end)
```

**Example** — JADE HUD in Lua:

```lua
greg.events.on_gui(function()
    greg.hud.begin_panel("MyMod", 10, 10, 400, 50)
    greg.hud.label("Status: OK")
    greg.hud.end_panel()
end)
```
