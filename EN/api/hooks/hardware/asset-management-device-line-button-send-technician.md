---
title: AssetManagementDeviceLine.ButtonSendTechnician
description: Hook event for AssetManagementDeviceLine.ButtonSendTechnician
path: /api/hooks/hardware/asset-management-device-line-button-send-technician
---

# AssetManagementDeviceLine.ButtonSendTechnician

> **Hook ID:** `greg.hardware.assetmanagementdeviceline.buttonsendtechnician`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagementDeviceLine.ButtonSendTechnician()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonSendTechnician()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonSendTechnician` events in `AssetManagementDeviceLine`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagementdeviceline.buttonsendtechnician", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagementdeviceline.buttonsendtechnician", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagementdeviceline.buttonsendtechnician")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagementdeviceline.buttonsendtechnician", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagementdeviceline.buttonsendtechnician", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagementdeviceline.buttonsendtechnician", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
