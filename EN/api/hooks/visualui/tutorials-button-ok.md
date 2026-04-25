---
title: Tutorials.ButtonOK
description: Hook event for Tutorials.ButtonOK
path: /api/hooks/visualui/tutorials-button-ok
---

# Tutorials.ButtonOK

> **Hook ID:** `greg.visualui.tutorials.buttonok`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.ButtonOK()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonOK()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonOK` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tutorials.buttonok", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tutorials.buttonok", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tutorials.buttonok")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tutorials.buttonok", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tutorials.buttonok", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tutorials.buttonok", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
