---
title: ToolTipInteract.ShowTooltipForInteract
description: Hook event for ToolTipInteract.ShowTooltipForInteract
path: /api/hooks/networking/tool-tip-interact-show-tooltip-for-interact
---

# ToolTipInteract.ShowTooltipForInteract

> **Hook ID:** `greg.networking.tooltipinteract.showtooltipforinteract`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ToolTipInteract.ShowTooltipForInteract()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowTooltipForInteract(String _text, Sprite _sprite)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_text` | `String` | ... |
| `_sprite` | `Sprite` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowTooltipForInteract` events in `ToolTipInteract`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tooltipinteract.showtooltipforinteract", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tooltipinteract.showtooltipforinteract", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tooltipinteract.showtooltipforinteract")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tooltipinteract.showtooltipforinteract", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tooltipinteract.showtooltipforinteract", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tooltipinteract.showtooltipforinteract", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
