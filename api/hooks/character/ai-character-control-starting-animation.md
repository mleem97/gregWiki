---
title: AICharacterControl.StartingAnimation
description: Hook event for AICharacterControl.StartingAnimation
path: /api/hooks/character/ai-character-control-starting-animation
---

# AICharacterControl.StartingAnimation

> **Hook ID:** `greg.character.aicharactercontrol.startinganimation`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterControl.StartingAnimation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StartingAnimation()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StartingAnimation` events in `AICharacterControl`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharactercontrol.startinganimation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharactercontrol.startinganimation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharactercontrol.startinganimation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharactercontrol.startinganimation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharactercontrol.startinganimation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharactercontrol.startinganimation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
