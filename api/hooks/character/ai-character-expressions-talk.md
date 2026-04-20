---
title: AICharacterExpressions.Talk
description: Hook event for AICharacterExpressions.Talk
path: /api/hooks/character/ai-character-expressions-talk
---

# AICharacterExpressions.Talk

> **Hook ID:** `greg.character.aicharacterexpressions.talk`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterExpressions.Talk()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Talk(String sentence)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sentence` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `Talk` events in `AICharacterExpressions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharacterexpressions.talk", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharacterexpressions.talk", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharacterexpressions.talk")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharacterexpressions.talk", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharacterexpressions.talk", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharacterexpressions.talk", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
