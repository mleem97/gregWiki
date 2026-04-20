---
title: CarController.BrakeAndDeacceleration
description: Hook event for CarController.BrakeAndDeacceleration
path: /api/hooks/world/car-controller-brake-and-deacceleration
---

# CarController.BrakeAndDeacceleration

> **Hook ID:** `greg.world.carcontroller.brakeanddeacceleration`
> **Category:** World
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController.BrakeAndDeacceleration()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void BrakeAndDeacceleration()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `BrakeAndDeacceleration` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.carcontroller.brakeanddeacceleration", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.carcontroller.brakeanddeacceleration", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.carcontroller.brakeanddeacceleration")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.carcontroller.brakeanddeacceleration", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.carcontroller.brakeanddeacceleration", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.carcontroller.brakeanddeacceleration", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
