---
title: IRecyclableScrollRectDataSource.GetItemCount
description: Hook event for IRecyclableScrollRectDataSource.GetItemCount
path: /api/hooks/visualui/i-recyclable-scroll-rect-data-source-get-item-count
---

# IRecyclableScrollRectDataSource.GetItemCount

> **Hook ID:** `greg.visualui.irecyclablescrollrectdatasource.getitemcount`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `IRecyclableScrollRectDataSource.GetItemCount()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetItemCount()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetItemCount` events in `IRecyclableScrollRectDataSource`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.irecyclablescrollrectdatasource.getitemcount", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.irecyclablescrollrectdatasource.getitemcount", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.irecyclablescrollrectdatasource.getitemcount")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.irecyclablescrollrectdatasource.getitemcount", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.irecyclablescrollrectdatasource.getitemcount", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.irecyclablescrollrectdatasource.getitemcount", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
