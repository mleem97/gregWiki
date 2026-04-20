---
title: SteamManager.OnEnable
description: Hook event for SteamManager.OnEnable
path: /api/hooks/steam/steam-manager-on-enable
---

# SteamManager.OnEnable

> **Hook ID:** `greg.steam.steammanager.onenable`
> **Category:** Steam
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamManager.OnEnable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnEnable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnEnable` events in `SteamManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.steam.steammanager.onenable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.steam.steammanager.onenable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.steam.steammanager.onenable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.steam.steammanager.onenable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.steam.steammanager.onenable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.steam.steammanager.onenable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
