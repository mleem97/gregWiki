---
title: AICharacterControl.moveBack
description: Hook event for AICharacterControl.moveBack
path: /api/hooks/character/ai-character-control-move-back
---

# AICharacterControl.moveBack

> **Hook ID:** `greg.character.aicharactercontrol.moveback`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterControl.moveBack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void moveBack(Vector3 direction)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `direction` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `moveBack` events in `AICharacterControl`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharactercontrol.moveback", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharactercontrol.moveback", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharactercontrol.moveback")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharactercontrol.moveback", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharactercontrol.moveback", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharactercontrol.moveback", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
