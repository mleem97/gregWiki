---
title: AssetManagement.ButtonFilterEOL
description: Hook event for AssetManagement.ButtonFilterEOL
path: /api/hooks/visualui/asset-management-button-filter-eol
---

# AssetManagement.ButtonFilterEOL

> **Hook ID:** `greg.visualui.assetmanagement.buttonfiltereol`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.ButtonFilterEOL()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonFilterEOL()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonFilterEOL` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.assetmanagement.buttonfiltereol", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.assetmanagement.buttonfiltereol", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.assetmanagement.buttonfiltereol")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.assetmanagement.buttonfiltereol", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.assetmanagement.buttonfiltereol", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.assetmanagement.buttonfiltereol", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
