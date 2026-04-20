---
title: InputController.GetEnumerator
description: Hook event for InputController.GetEnumerator
path: /api/hooks/world/input-controller-get-enumerator
---

# InputController.GetEnumerator

> **Hook ID:** `greg.world.inputcontroller.getenumerator`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputController.GetEnumerator()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator`1 GetEnumerator()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetEnumerator` events in `InputController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.inputcontroller.getenumerator", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.inputcontroller.getenumerator", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.inputcontroller.getenumerator")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.inputcontroller.getenumerator", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.inputcontroller.getenumerator", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.inputcontroller.getenumerator", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`1`
- **Safe to block?**: Yes
