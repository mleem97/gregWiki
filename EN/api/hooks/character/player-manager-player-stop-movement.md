---
title: PlayerManager.PlayerStopMovement
description: Hook event for PlayerManager.PlayerStopMovement
path: /api/hooks/character/player-manager-player-stop-movement
---

# PlayerManager.PlayerStopMovement

> **Hook ID:** `greg.character.playermanager.playerstopmovement`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PlayerManager.PlayerStopMovement()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayerStopMovement()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayerStopMovement` events in `PlayerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.playermanager.playerstopmovement", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.playermanager.playerstopmovement", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.playermanager.playerstopmovement")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.playermanager.playerstopmovement", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.playermanager.playerstopmovement", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.playermanager.playerstopmovement", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
