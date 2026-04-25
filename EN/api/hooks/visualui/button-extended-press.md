---
title: ButtonExtended.Press
description: Hook event for ButtonExtended.Press
path: /api/hooks/visualui/button-extended-press
---

# ButtonExtended.Press

> **Hook ID:** `greg.visualui.buttonextended.press`
> **Category:** Visualui
> **Namespace:** `UnityEngine.UI`

This hook intercepts calls to `ButtonExtended.Press()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Press()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Press` events in `ButtonExtended`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.buttonextended.press", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.buttonextended.press", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.buttonextended.press")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.buttonextended.press", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.buttonextended.press", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.buttonextended.press", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
