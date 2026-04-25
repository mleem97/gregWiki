---
title: InputController.Dispose
description: Hook event for InputController.Dispose
path: /api/hooks/world/input-controller-dispose
---

# InputController.Dispose

> **Hook ID:** `greg.world.inputcontroller.dispose`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputController.Dispose()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Dispose()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Dispose` events in `InputController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.inputcontroller.dispose", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.inputcontroller.dispose", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.inputcontroller.dispose")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.inputcontroller.dispose", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.inputcontroller.dispose", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.inputcontroller.dispose", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
