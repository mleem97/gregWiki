---
title: SteamManager.InitOnPlayMode
description: Hook event for SteamManager.InitOnPlayMode
path: /api/hooks/steam/steam-manager-init-on-play-mode
---

# SteamManager.InitOnPlayMode

> **Hook ID:** `greg.steam.steammanager.initonplaymode`
> **Category:** Steam
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamManager.InitOnPlayMode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InitOnPlayMode()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InitOnPlayMode` events in `SteamManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.steam.steammanager.initonplaymode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.steam.steammanager.initonplaymode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.steam.steammanager.initonplaymode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.steam.steammanager.initonplaymode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.steam.steammanager.initonplaymode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.steam.steammanager.initonplaymode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
