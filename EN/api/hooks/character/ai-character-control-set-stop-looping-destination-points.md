---
title: AICharacterControl.SetStopLoopingDestinationPoints
description: Hook event for AICharacterControl.SetStopLoopingDestinationPoints
path: /api/hooks/character/ai-character-control-set-stop-looping-destination-points
---

# AICharacterControl.SetStopLoopingDestinationPoints

> **Hook ID:** `greg.character.aicharactercontrol.setstoploopingdestinationpoints`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterControl.SetStopLoopingDestinationPoints()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetStopLoopingDestinationPoints()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SetStopLoopingDestinationPoints` events in `AICharacterControl`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharactercontrol.setstoploopingdestinationpoints", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharactercontrol.setstoploopingdestinationpoints", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharactercontrol.setstoploopingdestinationpoints")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharactercontrol.setstoploopingdestinationpoints", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharactercontrol.setstoploopingdestinationpoints", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharactercontrol.setstoploopingdestinationpoints", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
