---
title: InputController.Contains
description: Hook event for InputController.Contains
path: /api/hooks/world/input-controller-contains
---

# InputController.Contains

> **Hook ID:** `greg.world.inputcontroller.contains`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputController.Contains()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean Contains(InputAction action)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `InputAction` | ... |


## Using this Hook

::: tip
Use this hook to react to `Contains` events in `InputController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.inputcontroller.contains", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.inputcontroller.contains", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.inputcontroller.contains")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.inputcontroller.contains", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.inputcontroller.contains", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.inputcontroller.contains", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
