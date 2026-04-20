---
id: greg-hooks-catalog
title: greg hooks catalog & events runtime
description: Canonical `greg.*` runtime reference across HookBinder, GregEventDispatcher, and the new GregAPI (FFI).
---

This page is the **canonical runtime reference** for the `greg.*` hook/event surface.

## Layer ownership

- **Core SDK layer:** `GregEventDispatcher`, `GregNativeEventHooks`, `GregAPI.GregEventId`
- **Hook registry layer:** `greg_hooks.json` + HookBinder-based Harmony wiring
- **FFI layer:** Rust/Lua consumers subscribe via numeric `GregEventId`

## Runtime model

| Surface | Owner | Scope |
| --- | --- | --- |
| `GregAPI` | Core API | Static entry point for all mods (C#/Rust/Lua) |
| `GregEventId` | Core API | Numeric constants (uint) for FFI compatibility |
| `GregEventDispatcher` | Core SDK | Payload bus for complex C# objects |

## Subscription API

### C# (Native)
```csharp
GregAPI.Subscribe(GregEventId.MoneyChanged, (data) =>
{
    // handle event
});
```

### Lua (Scripting)
```lua
greg.subscribe_event(100, function(data)
    -- 100 is GregEventId.MoneyChanged
end)
```

## Event ID Mapping (GregEventId)

| ID (uint) | Name | Internal Hook |
| --- | --- | --- |
| **100** | `MoneyChanged` | `greg.economy.PlayerCoinUpdated` |
| **101** | `XpChanged` | `greg.economy.PlayerXpUpdated` |
| **102** | `ReputationChanged` | `greg.economy.PlayerReputationUpdated` |
| **200** | `ServerPowered` | `greg.hardware.ServerPowered` |
| **201** | `ServerBroken` | `greg.hardware.ServerBroken` |
| **202** | `ServerRepaired` | `greg.hardware.ServerRepaired` |
| **203** | `ServerInstalled` | `greg.hardware.ServerInstalled` |
| **300** | `DayEnded` | `greg.lifecycle.DayEnded` |
| **301** | `MonthEnded` | `greg.lifecycle.MonthEnded` |
| **700** | `GameSaved` | `greg.lifecycle.GameSaved` |
| **701** | `GameLoaded` | `greg.lifecycle.GameLoaded` |

## Full Hook Catalog

The complete hook inventory (including non-EventIds HookBinder hooks) is documented in the generated **Hooks Library** pages.

- Hooks Library root: `/02_development/hooks-library`
- Source for generated hook pages: `gregCore/gregFramework/greg_hooks.json`
