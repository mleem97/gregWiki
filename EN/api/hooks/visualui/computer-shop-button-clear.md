---
title: ComputerShop.ButtonClear
description: Hook event for ComputerShop.ButtonClear
path: /api/hooks/visualui/computer-shop-button-clear
---

# ComputerShop.ButtonClear

> **Hook ID:** `greg.visualui.computershop.buttonclear`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonClear()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonClear()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonClear` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.computershop.buttonclear", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.computershop.buttonclear", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.computershop.buttonclear")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.computershop.buttonclear", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.computershop.buttonclear", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.computershop.buttonclear", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
