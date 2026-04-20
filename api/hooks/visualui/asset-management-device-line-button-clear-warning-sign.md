---
title: AssetManagementDeviceLine.ButtonClearWarningSign
description: Hook event for AssetManagementDeviceLine.ButtonClearWarningSign
path: /api/hooks/visualui/asset-management-device-line-button-clear-warning-sign
---

# AssetManagementDeviceLine.ButtonClearWarningSign

> **Hook ID:** `greg.visualui.assetmanagementdeviceline.buttonclearwarningsign`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagementDeviceLine.ButtonClearWarningSign()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonClearWarningSign()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonClearWarningSign` events in `AssetManagementDeviceLine`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.assetmanagementdeviceline.buttonclearwarningsign", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
