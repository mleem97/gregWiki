---
title: AssetManagement.OnAutoRepairDropdownChanged
description: Hook event for AssetManagement.OnAutoRepairDropdownChanged
path: /api/hooks/hardware/asset-management-on-auto-repair-dropdown-changed
---

# AssetManagement.OnAutoRepairDropdownChanged

> **Hook ID:** `greg.hardware.assetmanagement.onautorepairdropdownchanged`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.OnAutoRepairDropdownChanged()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnAutoRepairDropdownChanged(Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnAutoRepairDropdownChanged` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagement.onautorepairdropdownchanged", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagement.onautorepairdropdownchanged", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagement.onautorepairdropdownchanged")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagement.onautorepairdropdownchanged", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagement.onautorepairdropdownchanged", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagement.onautorepairdropdownchanged", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
