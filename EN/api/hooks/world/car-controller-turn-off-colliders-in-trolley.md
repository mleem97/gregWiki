---
title: CarController.TurnOffCollidersInTrolley
description: Hook event for CarController.TurnOffCollidersInTrolley
path: /api/hooks/world/car-controller-turn-off-colliders-in-trolley
---

# CarController.TurnOffCollidersInTrolley

> **Hook ID:** `greg.world.carcontroller.turnoffcollidersintrolley`
> **Category:** World
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController.TurnOffCollidersInTrolley()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TurnOffCollidersInTrolley()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOffCollidersInTrolley` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.carcontroller.turnoffcollidersintrolley", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.carcontroller.turnoffcollidersintrolley", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.carcontroller.turnoffcollidersintrolley")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.carcontroller.turnoffcollidersintrolley", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.carcontroller.turnoffcollidersintrolley", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.carcontroller.turnoffcollidersintrolley", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
