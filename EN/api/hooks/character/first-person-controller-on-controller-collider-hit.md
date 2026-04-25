---
title: FirstPersonController.OnControllerColliderHit
description: Hook event for FirstPersonController.OnControllerColliderHit
path: /api/hooks/character/first-person-controller-on-controller-collider-hit
---

# FirstPersonController.OnControllerColliderHit

> **Hook ID:** `greg.character.firstpersoncontroller.oncontrollercolliderhit`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.OnControllerColliderHit()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnControllerColliderHit(ControllerColliderHit hit)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hit` | `ControllerColliderHit` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnControllerColliderHit` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.firstpersoncontroller.oncontrollercolliderhit", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.firstpersoncontroller.oncontrollercolliderhit", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.firstpersoncontroller.oncontrollercolliderhit")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.firstpersoncontroller.oncontrollercolliderhit", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.firstpersoncontroller.oncontrollercolliderhit", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.firstpersoncontroller.oncontrollercolliderhit", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
