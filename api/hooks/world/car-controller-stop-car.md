---
title: CarController.StopCar
description: Hook event for CarController.StopCar
path: /api/hooks/world/car-controller-stop-car
---

# CarController.StopCar

> **Hook ID:** `greg.world.carcontroller.stopcar`
> **Category:** World
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController.StopCar()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StopCar()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StopCar` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.carcontroller.stopcar", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.carcontroller.stopcar", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.carcontroller.stopcar")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.carcontroller.stopcar", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.carcontroller.stopcar", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.carcontroller.stopcar", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
