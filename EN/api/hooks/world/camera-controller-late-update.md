---
title: CameraController.LateUpdate
description: Hook event for CameraController.LateUpdate
path: /api/hooks/world/camera-controller-late-update
---

# CameraController.LateUpdate

> **Hook ID:** `greg.world.cameracontroller.lateupdate`
> **Category:** World
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `CameraController.LateUpdate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LateUpdate()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LateUpdate` events in `CameraController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.cameracontroller.lateupdate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.cameracontroller.lateupdate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.cameracontroller.lateupdate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.cameracontroller.lateupdate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.cameracontroller.lateupdate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.cameracontroller.lateupdate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
