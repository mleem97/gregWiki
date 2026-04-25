---
title: AssetManagement.ButtonFilterAll
description: Hook event for AssetManagement.ButtonFilterAll
path: /api/hooks/visualui/asset-management-button-filter-all
---

# AssetManagement.ButtonFilterAll

> **Hook ID:** `greg.visualui.assetmanagement.buttonfilterall`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.ButtonFilterAll()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonFilterAll()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonFilterAll` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.assetmanagement.buttonfilterall", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.assetmanagement.buttonfilterall", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.assetmanagement.buttonfilterall")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.assetmanagement.buttonfilterall", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.assetmanagement.buttonfilterall", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.assetmanagement.buttonfilterall", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
