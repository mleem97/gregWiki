---
title: TMP_UiFrameRateCounter.Set_FrameCounter_Position
description: Hook event for TMP_UiFrameRateCounter.Set_FrameCounter_Position
path: /api/hooks/visualui/tmp_-ui-frame-rate-counter-set_-frame-counter_-position
---

# TMP_UiFrameRateCounter.Set_FrameCounter_Position

> **Hook ID:** `greg.visualui.tmp_uiframeratecounter.set_framecounter_position`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_UiFrameRateCounter.Set_FrameCounter_Position()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Set_FrameCounter_Position(FpsCounterAnchorPositions anchor_position)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `anchor_position` | `FpsCounterAnchorPositions` | ... |


## Using this Hook

::: tip
Use this hook to react to `Set_FrameCounter_Position` events in `TMP_UiFrameRateCounter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_uiframeratecounter.set_framecounter_position", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_uiframeratecounter.set_framecounter_position", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_uiframeratecounter.set_framecounter_position")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_uiframeratecounter.set_framecounter_position", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_uiframeratecounter.set_framecounter_position", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_uiframeratecounter.set_framecounter_position", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
