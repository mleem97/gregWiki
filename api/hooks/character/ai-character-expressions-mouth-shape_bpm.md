---
title: AICharacterExpressions.MouthShape_BPM
description: Hook event for AICharacterExpressions.MouthShape_BPM
path: /api/hooks/character/ai-character-expressions-mouth-shape_bpm
---

# AICharacterExpressions.MouthShape_BPM

> **Hook ID:** `greg.character.aicharacterexpressions.mouthshape_bpm`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterExpressions.MouthShape_BPM()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MouthShape_BPM(Single t)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `t` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `MouthShape_BPM` events in `AICharacterExpressions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharacterexpressions.mouthshape_bpm", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharacterexpressions.mouthshape_bpm", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharacterexpressions.mouthshape_bpm")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharacterexpressions.mouthshape_bpm", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharacterexpressions.mouthshape_bpm", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharacterexpressions.mouthshape_bpm", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
