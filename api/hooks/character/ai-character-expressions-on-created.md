---
title: AICharacterExpressions.OnCreated
description: Hook event for AICharacterExpressions.OnCreated
path: /api/hooks/character/ai-character-expressions-on-created
---

# AICharacterExpressions.OnCreated

> **Hook ID:** `greg.character.aicharacterexpressions.oncreated`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterExpressions.OnCreated()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnCreated(UMAData umadata)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `umadata` | `UMAData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnCreated` events in `AICharacterExpressions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharacterexpressions.oncreated", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharacterexpressions.oncreated", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharacterexpressions.oncreated")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharacterexpressions.oncreated", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharacterexpressions.oncreated", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharacterexpressions.oncreated", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
