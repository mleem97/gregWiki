---
title: SteamManager.Awake
description: Hook event for SteamManager.Awake
path: /api/hooks/steam/steam-manager-awake
---

# SteamManager.Awake

> **Hook ID:** `greg.steam.steammanager.awake`
> **Category:** Steam
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamManager.Awake()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Awake()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Awake` events in `SteamManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.steam.steammanager.awake", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.steam.steammanager.awake", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.steam.steammanager.awake")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.steam.steammanager.awake", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.steam.steammanager.awake", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.steam.steammanager.awake", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
