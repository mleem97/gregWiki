---
title: ThirdPersonCharacter.OnAnimatorMove
description: Hook event for ThirdPersonCharacter.OnAnimatorMove
path: /api/hooks/character/third-person-character-on-animator-move
---

# ThirdPersonCharacter.OnAnimatorMove

> **Hook ID:** `greg.character.thirdpersoncharacter.onanimatormove`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.OnAnimatorMove()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnAnimatorMove()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnAnimatorMove` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.thirdpersoncharacter.onanimatormove", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.thirdpersoncharacter.onanimatormove", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.thirdpersoncharacter.onanimatormove")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.thirdpersoncharacter.onanimatormove", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.thirdpersoncharacter.onanimatormove", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.thirdpersoncharacter.onanimatormove", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
