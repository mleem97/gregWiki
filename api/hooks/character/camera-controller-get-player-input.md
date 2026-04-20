---
title: CameraController.GetPlayerInput
description: Hook event for CameraController.GetPlayerInput
path: /api/hooks/character/camera-controller-get-player-input
---

# CameraController.GetPlayerInput

> **Hook ID:** `greg.character.cameracontroller.getplayerinput`
> **Category:** Character
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `CameraController.GetPlayerInput()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GetPlayerInput()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetPlayerInput` events in `CameraController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.cameracontroller.getplayerinput", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.cameracontroller.getplayerinput", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.cameracontroller.getplayerinput")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.cameracontroller.getplayerinput", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.cameracontroller.getplayerinput", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.cameracontroller.getplayerinput", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
