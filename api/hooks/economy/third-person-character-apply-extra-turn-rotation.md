---
title: ThirdPersonCharacter.ApplyExtraTurnRotation
description: Hook event for ThirdPersonCharacter.ApplyExtraTurnRotation
path: /api/hooks/economy/third-person-character-apply-extra-turn-rotation
---

# ThirdPersonCharacter.ApplyExtraTurnRotation

> **Hook ID:** `greg.economy.thirdpersoncharacter.applyextraturnrotation`
> **Category:** Economy
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.ApplyExtraTurnRotation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ApplyExtraTurnRotation()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ApplyExtraTurnRotation` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.thirdpersoncharacter.applyextraturnrotation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.thirdpersoncharacter.applyextraturnrotation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.thirdpersoncharacter.applyextraturnrotation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.thirdpersoncharacter.applyextraturnrotation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.thirdpersoncharacter.applyextraturnrotation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.thirdpersoncharacter.applyextraturnrotation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
