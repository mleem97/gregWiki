---
title: viperInput.NumControllers
description: Hook event for viperInput.NumControllers
path: /api/hooks/character/viper-input-num-controllers
---

# viperInput.NumControllers

> **Hook ID:** `greg.character.viperinput.numcontrollers`
> **Category:** Character
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.NumControllers()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 NumControllers()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `NumControllers` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.viperinput.numcontrollers", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.viperinput.numcontrollers", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.viperinput.numcontrollers")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.viperinput.numcontrollers", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.viperinput.numcontrollers", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.viperinput.numcontrollers", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
