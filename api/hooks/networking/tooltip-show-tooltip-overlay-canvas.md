---
title: Tooltip.ShowTooltipOverlayCanvas
description: Hook event for Tooltip.ShowTooltipOverlayCanvas
path: /api/hooks/networking/tooltip-show-tooltip-overlay-canvas
---

# Tooltip.ShowTooltipOverlayCanvas

> **Hook ID:** `greg.networking.tooltip.showtooltipoverlaycanvas`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tooltip.ShowTooltipOverlayCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowTooltipOverlayCanvas(String tooltipText, Vector3 _position, Int32 differentXOffset)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `tooltipText` | `String` | ... |
| `_position` | `Vector3` | ... |
| `differentXOffset` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowTooltipOverlayCanvas` events in `Tooltip`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tooltip.showtooltipoverlaycanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tooltip.showtooltipoverlaycanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tooltip.showtooltipoverlaycanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tooltip.showtooltipoverlaycanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tooltip.showtooltipoverlaycanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tooltip.showtooltipoverlaycanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
