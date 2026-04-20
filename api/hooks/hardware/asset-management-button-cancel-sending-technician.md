---
title: AssetManagement.ButtonCancelSendingTechnician
description: Hook event for AssetManagement.ButtonCancelSendingTechnician
path: /api/hooks/hardware/asset-management-button-cancel-sending-technician
---

# AssetManagement.ButtonCancelSendingTechnician

> **Hook ID:** `greg.hardware.assetmanagement.buttoncancelsendingtechnician`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.ButtonCancelSendingTechnician()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonCancelSendingTechnician()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonCancelSendingTechnician` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagement.buttoncancelsendingtechnician", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagement.buttoncancelsendingtechnician", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagement.buttoncancelsendingtechnician")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagement.buttoncancelsendingtechnician", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagement.buttoncancelsendingtechnician", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagement.buttoncancelsendingtechnician", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
