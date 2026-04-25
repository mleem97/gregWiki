---
title: IRecyclableScrollRectDataSource.SetCell
description: Hook event for IRecyclableScrollRectDataSource.SetCell
path: /api/hooks/visualui/i-recyclable-scroll-rect-data-source-set-cell
---

# IRecyclableScrollRectDataSource.SetCell

> **Hook ID:** `greg.visualui.irecyclablescrollrectdatasource.setcell`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `IRecyclableScrollRectDataSource.SetCell()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `SetCell` events in `IRecyclableScrollRectDataSource`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.irecyclablescrollrectdatasource.setcell", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.irecyclablescrollrectdatasource.setcell", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.irecyclablescrollrectdatasource.setcell")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.irecyclablescrollrectdatasource.setcell", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.irecyclablescrollrectdatasource.setcell", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.irecyclablescrollrectdatasource.setcell", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
