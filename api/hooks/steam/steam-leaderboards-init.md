---
title: SteamLeaderboards.Init
description: Hook event for SteamLeaderboards.Init
path: /api/hooks/steam/steam-leaderboards-init
---

# SteamLeaderboards.Init

> **Hook ID:** `greg.steam.steamleaderboards.init`
> **Category:** Steam
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamLeaderboards.Init()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Init()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Init` events in `SteamLeaderboards`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.steam.steamleaderboards.init", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.steam.steamleaderboards.init", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.steam.steamleaderboards.init")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.steam.steamleaderboards.init", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.steam.steamleaderboards.init", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.steam.steamleaderboards.init", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
