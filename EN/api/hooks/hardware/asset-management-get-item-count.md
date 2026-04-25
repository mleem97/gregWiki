---
title: AssetManagement.GetItemCount
description: Hook event for AssetManagement.GetItemCount
path: /api/hooks/hardware/asset-management-get-item-count
---

# AssetManagement.GetItemCount

> **Hook ID:** `greg.hardware.assetmanagement.getitemcount`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.GetItemCount()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetItemCount()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetItemCount` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagement.getitemcount", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagement.getitemcount", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagement.getitemcount")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagement.getitemcount", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagement.getitemcount", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagement.getitemcount", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
