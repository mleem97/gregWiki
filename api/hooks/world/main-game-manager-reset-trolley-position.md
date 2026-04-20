---
title: MainGameManager.ResetTrolleyPosition
description: Hook event for MainGameManager.ResetTrolleyPosition
path: /api/hooks/world/main-game-manager-reset-trolley-position
---

# MainGameManager.ResetTrolleyPosition

> **Hook ID:** `greg.world.maingamemanager.resettrolleyposition`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ResetTrolleyPosition()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetTrolleyPosition()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ResetTrolleyPosition` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.maingamemanager.resettrolleyposition", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.maingamemanager.resettrolleyposition", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.maingamemanager.resettrolleyposition")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.maingamemanager.resettrolleyposition", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.maingamemanager.resettrolleyposition", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.maingamemanager.resettrolleyposition", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
