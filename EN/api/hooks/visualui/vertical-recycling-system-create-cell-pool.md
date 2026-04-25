---
title: VerticalRecyclingSystem.CreateCellPool
description: Hook event for VerticalRecyclingSystem.CreateCellPool
path: /api/hooks/visualui/vertical-recycling-system-create-cell-pool
---

# VerticalRecyclingSystem.CreateCellPool

> **Hook ID:** `greg.visualui.verticalrecyclingsystem.createcellpool`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `VerticalRecyclingSystem.CreateCellPool()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CreateCellPool()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CreateCellPool` events in `VerticalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.verticalrecyclingsystem.createcellpool", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.verticalrecyclingsystem.createcellpool", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.verticalrecyclingsystem.createcellpool")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.verticalrecyclingsystem.createcellpool", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.verticalrecyclingsystem.createcellpool", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.verticalrecyclingsystem.createcellpool", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
