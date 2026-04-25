---
title: MouseLook.LookRotation
description: Hook event for MouseLook.LookRotation
path: /api/hooks/character/mouse-look-look-rotation
---

# MouseLook.LookRotation

> **Hook ID:** `greg.character.mouselook.lookrotation`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.LookRotation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LookRotation(Transform character, Transform camera, Quaternion externalRotation, Transform ladderTrigger)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `character` | `Transform` | ... |
| `camera` | `Transform` | ... |
| `externalRotation` | `Quaternion` | ... |
| `ladderTrigger` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `LookRotation` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.mouselook.lookrotation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.mouselook.lookrotation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.mouselook.lookrotation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.mouselook.lookrotation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.mouselook.lookrotation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.mouselook.lookrotation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
