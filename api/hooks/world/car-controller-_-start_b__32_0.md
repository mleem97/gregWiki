---
title: CarController._Start_b__32_0
description: Hook event for CarController._Start_b__32_0
path: /api/hooks/world/car-controller-_-start_b__32_0
---

# CarController._Start_b__32_0

> **Hook ID:** `greg.world.carcontroller._start_b__32_0`
> **Category:** World
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController._Start_b__32_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Start_b__32_0(CallbackContext ctx)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ctx` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Start_b__32_0` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.carcontroller._start_b__32_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.carcontroller._start_b__32_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.carcontroller._start_b__32_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.carcontroller._start_b__32_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.carcontroller._start_b__32_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.carcontroller._start_b__32_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
