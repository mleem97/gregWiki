---
title: SteamManager.SteamAPIDebugTextHook
description: Hook event for SteamManager.SteamAPIDebugTextHook
path: /api/hooks/visualui/steam-manager-steam-api-debug-text-hook
---

# SteamManager.SteamAPIDebugTextHook

> **Hook ID:** `greg.visualui.steammanager.steamapidebugtexthook`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamManager.SteamAPIDebugTextHook()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SteamAPIDebugTextHook(Int32 nSeverity, StringBuilder pchDebugText)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `nSeverity` | `Int32` | ... |
| `pchDebugText` | `StringBuilder` | ... |


## Using this Hook

::: tip
Use this hook to react to `SteamAPIDebugTextHook` events in `SteamManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.steammanager.steamapidebugtexthook", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.steammanager.steamapidebugtexthook", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.steammanager.steamapidebugtexthook")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.steammanager.steamapidebugtexthook", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.steammanager.steamapidebugtexthook", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.steammanager.steamapidebugtexthook", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
