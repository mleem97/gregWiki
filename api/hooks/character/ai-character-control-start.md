---
title: AICharacterControl.Start
description: Hook event for AICharacterControl.Start
path: /api/hooks/character/ai-character-control-start
---

# AICharacterControl.Start

> **Hook ID:** `greg.character.aicharactercontrol.start`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AICharacterControl.Start()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator Start()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Start` events in `AICharacterControl`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.aicharactercontrol.start", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.aicharactercontrol.start", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.aicharactercontrol.start")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.aicharactercontrol.start", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.aicharactercontrol.start", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.aicharactercontrol.start", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
