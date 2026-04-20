---
title: VerticalRecyclingSystem.RecycleBottomToTop
description: Hook event for VerticalRecyclingSystem.RecycleBottomToTop
path: /api/hooks/visualui/vertical-recycling-system-recycle-bottom-to-top
---

# VerticalRecyclingSystem.RecycleBottomToTop

> **Hook ID:** `greg.visualui.verticalrecyclingsystem.recyclebottomtotop`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `VerticalRecyclingSystem.RecycleBottomToTop()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 RecycleBottomToTop()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RecycleBottomToTop` events in `VerticalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.verticalrecyclingsystem.recyclebottomtotop", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.verticalrecyclingsystem.recyclebottomtotop", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.verticalrecyclingsystem.recyclebottomtotop")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.verticalrecyclingsystem.recyclebottomtotop", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.verticalrecyclingsystem.recyclebottomtotop", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.verticalrecyclingsystem.recyclebottomtotop", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
