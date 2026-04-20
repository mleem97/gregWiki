---
title: Player.WarpPlayer
description: Hook event for Player.WarpPlayer
path: /api/hooks/economy/player-warp-player
---

# Player.WarpPlayer

> **Hook ID:** `greg.economy.player.warpplayer`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.WarpPlayer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void WarpPlayer(Vector3 _position, Quaternion _rotation)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_position` | `Vector3` | ... |
| `_rotation` | `Quaternion` | ... |


## Using this Hook

::: tip
Use this hook to react to `WarpPlayer` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.player.warpplayer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.player.warpplayer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.player.warpplayer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.player.warpplayer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.player.warpplayer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.player.warpplayer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
