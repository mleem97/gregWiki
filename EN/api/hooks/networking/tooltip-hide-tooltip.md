---
title: Tooltip.HideTooltip
description: Hook event for Tooltip.HideTooltip
path: /api/hooks/networking/tooltip-hide-tooltip
---

# Tooltip.HideTooltip

> **Hook ID:** `greg.networking.tooltip.hidetooltip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tooltip.HideTooltip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HideTooltip()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `HideTooltip` events in `Tooltip`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tooltip.hidetooltip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tooltip.hidetooltip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tooltip.hidetooltip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tooltip.hidetooltip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tooltip.hidetooltip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tooltip.hidetooltip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
