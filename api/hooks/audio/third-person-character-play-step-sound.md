---
title: ThirdPersonCharacter.PlayStepSound
description: Hook event for ThirdPersonCharacter.PlayStepSound
path: /api/hooks/audio/third-person-character-play-step-sound
---

# ThirdPersonCharacter.PlayStepSound

> **Hook ID:** `greg.audio.thirdpersoncharacter.playstepsound`
> **Category:** Audio
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.PlayStepSound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayStepSound()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayStepSound` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.thirdpersoncharacter.playstepsound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.thirdpersoncharacter.playstepsound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.thirdpersoncharacter.playstepsound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.thirdpersoncharacter.playstepsound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.thirdpersoncharacter.playstepsound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.thirdpersoncharacter.playstepsound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
