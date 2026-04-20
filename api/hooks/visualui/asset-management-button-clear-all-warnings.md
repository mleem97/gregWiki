---
title: AssetManagement.ButtonClearAllWarnings
description: Hook event for AssetManagement.ButtonClearAllWarnings
path: /api/hooks/visualui/asset-management-button-clear-all-warnings
---

# AssetManagement.ButtonClearAllWarnings

> **Hook ID:** `greg.visualui.assetmanagement.buttonclearallwarnings`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.ButtonClearAllWarnings()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonClearAllWarnings()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonClearAllWarnings` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.assetmanagement.buttonclearallwarnings", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.assetmanagement.buttonclearallwarnings", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.assetmanagement.buttonclearallwarnings")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.assetmanagement.buttonclearallwarnings", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.assetmanagement.buttonclearallwarnings", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.assetmanagement.buttonclearallwarnings", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
