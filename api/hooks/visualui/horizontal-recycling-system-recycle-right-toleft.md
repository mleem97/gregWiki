---
title: HorizontalRecyclingSystem.RecycleRightToleft
description: Hook event for HorizontalRecyclingSystem.RecycleRightToleft
path: /api/hooks/visualui/horizontal-recycling-system-recycle-right-toleft
---

# HorizontalRecyclingSystem.RecycleRightToleft

> **Hook ID:** `greg.visualui.horizontalrecyclingsystem.recyclerighttoleft`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `HorizontalRecyclingSystem.RecycleRightToleft()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 RecycleRightToleft()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RecycleRightToleft` events in `HorizontalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.horizontalrecyclingsystem.recyclerighttoleft", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
