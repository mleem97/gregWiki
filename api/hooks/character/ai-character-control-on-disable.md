---
title: AICharacterControl.OnDisable
description: Hook event for AICharacterControl.OnDisable
path: /api/hooks/character/ai-character-control-on-disable
---

# AICharacterControl.OnDisable

> **Hook ID:** `greg.character.aicharactercontrol.ondisable`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterControl.OnDisable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDisable` events in `AICharacterControl`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharactercontrol.ondisable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharactercontrol.ondisable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharactercontrol.ondisable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharactercontrol.ondisable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharactercontrol.ondisable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharactercontrol.ondisable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
