---
title: InputManager.LockedCursorForPlayerMovement
description: Hook event for InputManager.LockedCursorForPlayerMovement
path: /api/hooks/character/input-manager-locked-cursor-for-player-movement
---

# InputManager.LockedCursorForPlayerMovement

> **Hook ID:** `greg.character.inputmanager.lockedcursorforplayermovement`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.LockedCursorForPlayerMovement()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LockedCursorForPlayerMovement()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LockedCursorForPlayerMovement` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.inputmanager.lockedcursorforplayermovement", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.inputmanager.lockedcursorforplayermovement", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.inputmanager.lockedcursorforplayermovement")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.inputmanager.lockedcursorforplayermovement", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.inputmanager.lockedcursorforplayermovement", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.inputmanager.lockedcursorforplayermovement", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
