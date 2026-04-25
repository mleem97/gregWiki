---
title: Player.LoadPlayer
description: Hook event for Player.LoadPlayer
path: /api/hooks/persistence/player-load-player
---

# Player.LoadPlayer

> **Hook ID:** `greg.persistence.player.loadplayer`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Player.LoadPlayer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadPlayer(PlayerData data)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `data` | `PlayerData` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadPlayer` events in `Player`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.player.loadplayer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.player.loadplayer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.player.loadplayer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.player.loadplayer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.player.loadplayer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.player.loadplayer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
