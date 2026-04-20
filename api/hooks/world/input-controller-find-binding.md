---
title: InputController.FindBinding
description: Hook event for InputController.FindBinding
path: /api/hooks/world/input-controller-find-binding
---

# InputController.FindBinding

> **Hook ID:** `greg.world.inputcontroller.findbinding`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputController.FindBinding()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 FindBinding(InputBinding bindingMask, InputAction& action)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `bindingMask` | `InputBinding` | ... |
| `action` | `InputAction&` | ... |


## Using this Hook

::: tip
Use this hook to react to `FindBinding` events in `InputController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.inputcontroller.findbinding", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.inputcontroller.findbinding", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.inputcontroller.findbinding")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.inputcontroller.findbinding", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.inputcontroller.findbinding", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.inputcontroller.findbinding", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
