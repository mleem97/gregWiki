---
title: ThirdPersonCharacter.UpdateAnimator
description: Hook event for ThirdPersonCharacter.UpdateAnimator
path: /api/hooks/world/third-person-character-update-animator
---

# ThirdPersonCharacter.UpdateAnimator

> **Hook ID:** `greg.world.thirdpersoncharacter.updateanimator`
> **Category:** World
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.UpdateAnimator()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateAnimator(Vector3 move)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `move` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateAnimator` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.thirdpersoncharacter.updateanimator", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.thirdpersoncharacter.updateanimator", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.thirdpersoncharacter.updateanimator")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.thirdpersoncharacter.updateanimator", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.thirdpersoncharacter.updateanimator", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.thirdpersoncharacter.updateanimator", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
