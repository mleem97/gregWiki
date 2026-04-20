---
title: Player.CheckFallsThroughMap
description: Hook event for Player.CheckFallsThroughMap
path: /api/hooks/economy/player-check-falls-through-map
---

# Player.CheckFallsThroughMap

> **Hook ID:** `greg.economy.player.checkfallsthroughmap`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.CheckFallsThroughMap()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CheckFallsThroughMap()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CheckFallsThroughMap` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.player.checkfallsthroughmap", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.player.checkfallsthroughmap", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.player.checkfallsthroughmap")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.player.checkfallsthroughmap", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.player.checkfallsthroughmap", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.player.checkfallsthroughmap", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
