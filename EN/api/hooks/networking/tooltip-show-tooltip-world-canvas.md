---
title: Tooltip.ShowTooltipWorldCanvas
description: Hook event for Tooltip.ShowTooltipWorldCanvas
path: /api/hooks/networking/tooltip-show-tooltip-world-canvas
---

# Tooltip.ShowTooltipWorldCanvas

> **Hook ID:** `greg.networking.tooltip.showtooltipworldcanvas`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tooltip.ShowTooltipWorldCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowTooltipWorldCanvas(String _text, RectTransform _transform, Camera cam)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_text` | `String` | ... |
| `_transform` | `RectTransform` | ... |
| `cam` | `Camera` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowTooltipWorldCanvas` events in `Tooltip`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tooltip.showtooltipworldcanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tooltip.showtooltipworldcanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tooltip.showtooltipworldcanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tooltip.showtooltipworldcanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tooltip.showtooltipworldcanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tooltip.showtooltipworldcanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
