---
title: HorizontalRecyclingSystem.SetRecyclingBounds
description: Hook event for HorizontalRecyclingSystem.SetRecyclingBounds
path: /api/hooks/visualui/horizontal-recycling-system-set-recycling-bounds
---

# HorizontalRecyclingSystem.SetRecyclingBounds

> **Hook ID:** `greg.visualui.horizontalrecyclingsystem.setrecyclingbounds`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `HorizontalRecyclingSystem.SetRecyclingBounds()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetRecyclingBounds()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SetRecyclingBounds` events in `HorizontalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.horizontalrecyclingsystem.setrecyclingbounds", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
