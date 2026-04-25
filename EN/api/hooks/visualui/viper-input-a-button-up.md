---
title: viperInput.AButtonUp
description: Hook event for viperInput.AButtonUp
path: /api/hooks/visualui/viper-input-a-button-up
---

# viperInput.AButtonUp

> **Hook ID:** `greg.visualui.viperinput.abuttonup`
> **Category:** Visualui
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.AButtonUp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean AButtonUp()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AButtonUp` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.viperinput.abuttonup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.viperinput.abuttonup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.viperinput.abuttonup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.viperinput.abuttonup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.viperinput.abuttonup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.viperinput.abuttonup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
