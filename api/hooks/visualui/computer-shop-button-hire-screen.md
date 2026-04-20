---
title: ComputerShop.ButtonHireScreen
description: Hook event for ComputerShop.ButtonHireScreen
path: /api/hooks/visualui/computer-shop-button-hire-screen
---

# ComputerShop.ButtonHireScreen

> **Hook ID:** `greg.visualui.computershop.buttonhirescreen`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonHireScreen()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonHireScreen()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonHireScreen` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.computershop.buttonhirescreen", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.computershop.buttonhirescreen", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.computershop.buttonhirescreen")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.computershop.buttonhirescreen", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.computershop.buttonhirescreen", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.computershop.buttonhirescreen", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
