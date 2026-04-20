---
title: FirstPersonController.Crouch
description: Hook event for FirstPersonController.Crouch
path: /api/hooks/character/first-person-controller-crouch
---

# FirstPersonController.Crouch

> **Hook ID:** `greg.character.firstpersoncontroller.crouch`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.Crouch()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Crouch()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Crouch` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.firstpersoncontroller.crouch", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.firstpersoncontroller.crouch", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.firstpersoncontroller.crouch")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.firstpersoncontroller.crouch", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.firstpersoncontroller.crouch", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.firstpersoncontroller.crouch", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
