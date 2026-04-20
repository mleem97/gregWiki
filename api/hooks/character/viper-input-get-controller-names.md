---
title: viperInput.GetControllerNames
description: Hook event for viperInput.GetControllerNames
path: /api/hooks/character/viper-input-get-controller-names
---

# viperInput.GetControllerNames

> **Hook ID:** `greg.character.viperinput.getcontrollernames`
> **Category:** Character
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetControllerNames()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStringArray GetControllerNames()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetControllerNames` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.viperinput.getcontrollernames", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.viperinput.getcontrollernames", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.viperinput.getcontrollernames")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.viperinput.getcontrollernames", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.viperinput.getcontrollernames", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.viperinput.getcontrollernames", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStringArray`
- **Safe to block?**: Yes
