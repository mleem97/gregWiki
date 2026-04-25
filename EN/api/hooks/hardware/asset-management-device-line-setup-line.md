---
title: AssetManagementDeviceLine.SetupLine
description: Hook event for AssetManagementDeviceLine.SetupLine
path: /api/hooks/hardware/asset-management-device-line-setup-line
---

# AssetManagementDeviceLine.SetupLine

> **Hook ID:** `greg.hardware.assetmanagementdeviceline.setupline`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagementDeviceLine.SetupLine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetupLine(AssetManagementDeviceLineData data, Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `data` | `AssetManagementDeviceLineData` | ... |
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetupLine` events in `AssetManagementDeviceLine`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagementdeviceline.setupline", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagementdeviceline.setupline", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagementdeviceline.setupline")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagementdeviceline.setupline", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagementdeviceline.setupline", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagementdeviceline.setupline", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
