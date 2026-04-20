---
title: ThirdPersonCharacter.Move
description: Hook event for ThirdPersonCharacter.Move
path: /api/hooks/character/third-person-character-move
---

# ThirdPersonCharacter.Move

> **Hook ID:** `greg.character.thirdpersoncharacter.move`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.Move()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Move(Vector3 move, Boolean crouch, Boolean jump, Boolean onlyturn, Boolean backward)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `move` | `Vector3` | ... |
| `crouch` | `Boolean` | ... |
| `jump` | `Boolean` | ... |
| `onlyturn` | `Boolean` | ... |
| `backward` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `Move` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.thirdpersoncharacter.move", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.thirdpersoncharacter.move", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.thirdpersoncharacter.move")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.thirdpersoncharacter.move", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.thirdpersoncharacter.move", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.thirdpersoncharacter.move", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
