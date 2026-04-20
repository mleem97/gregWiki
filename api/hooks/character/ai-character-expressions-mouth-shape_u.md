---
title: AICharacterExpressions.MouthShape_U
description: Hook event for AICharacterExpressions.MouthShape_U
path: /api/hooks/character/ai-character-expressions-mouth-shape_u
---

# AICharacterExpressions.MouthShape_U

> **Hook ID:** `greg.character.aicharacterexpressions.mouthshape_u`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterExpressions.MouthShape_U()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MouthShape_U(Single t)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `t` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `MouthShape_U` events in `AICharacterExpressions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharacterexpressions.mouthshape_u", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharacterexpressions.mouthshape_u", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharacterexpressions.mouthshape_u")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharacterexpressions.mouthshape_u", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharacterexpressions.mouthshape_u", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharacterexpressions.mouthshape_u", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
