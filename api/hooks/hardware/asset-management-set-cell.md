---
title: AssetManagement.SetCell
description: Hook event for AssetManagement.SetCell
path: /api/hooks/hardware/asset-management-set-cell
---

# AssetManagement.SetCell

> **Hook ID:** `greg.hardware.assetmanagement.setcell`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.SetCell()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetCell(ICell cell, Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cell` | `ICell` | ... |
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetCell` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagement.setcell", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagement.setcell", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagement.setcell")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagement.setcell", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagement.setcell", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagement.setcell", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
