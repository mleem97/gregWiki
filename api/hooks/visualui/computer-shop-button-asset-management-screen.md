---
title: ComputerShop.ButtonAssetManagementScreen
description: Hook event for ComputerShop.ButtonAssetManagementScreen
path: /api/hooks/visualui/computer-shop-button-asset-management-screen
---

# ComputerShop.ButtonAssetManagementScreen

> **Hook ID:** `greg.visualui.computershop.buttonassetmanagementscreen`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonAssetManagementScreen()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonAssetManagementScreen()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonAssetManagementScreen` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.computershop.buttonassetmanagementscreen", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.computershop.buttonassetmanagementscreen", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.computershop.buttonassetmanagementscreen")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.computershop.buttonassetmanagementscreen", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.computershop.buttonassetmanagementscreen", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.computershop.buttonassetmanagementscreen", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
