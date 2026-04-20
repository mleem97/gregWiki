---
title: CarController.TurnBackOnCollidersInTRolley
description: Hook event for CarController.TurnBackOnCollidersInTRolley
path: /api/hooks/world/car-controller-turn-back-on-colliders-in-t-rolley
---

# CarController.TurnBackOnCollidersInTRolley

> **Hook ID:** `greg.world.carcontroller.turnbackoncollidersintrolley`
> **Category:** World
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController.TurnBackOnCollidersInTRolley()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TurnBackOnCollidersInTRolley()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnBackOnCollidersInTRolley` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.carcontroller.turnbackoncollidersintrolley", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.carcontroller.turnbackoncollidersintrolley", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.carcontroller.turnbackoncollidersintrolley")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.carcontroller.turnbackoncollidersintrolley", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.carcontroller.turnbackoncollidersintrolley", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.carcontroller.turnbackoncollidersintrolley", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
