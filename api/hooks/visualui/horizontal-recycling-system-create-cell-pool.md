---
title: HorizontalRecyclingSystem.CreateCellPool
description: Hook event for HorizontalRecyclingSystem.CreateCellPool
path: /api/hooks/visualui/horizontal-recycling-system-create-cell-pool
---

# HorizontalRecyclingSystem.CreateCellPool

> **Hook ID:** `greg.visualui.horizontalrecyclingsystem.createcellpool`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `HorizontalRecyclingSystem.CreateCellPool()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateCellPool()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CreateCellPool` events in `HorizontalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.horizontalrecyclingsystem.createcellpool", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.horizontalrecyclingsystem.createcellpool", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.horizontalrecyclingsystem.createcellpool")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.horizontalrecyclingsystem.createcellpool", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.horizontalrecyclingsystem.createcellpool", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.horizontalrecyclingsystem.createcellpool", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
