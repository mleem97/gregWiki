---
title: VerticalRecyclingSystem.SetTopLeftAnchor
description: Hook event for VerticalRecyclingSystem.SetTopLeftAnchor
path: /api/hooks/visualui/vertical-recycling-system-set-top-left-anchor
---

# VerticalRecyclingSystem.SetTopLeftAnchor

> **Hook ID:** `greg.visualui.verticalrecyclingsystem.settopleftanchor`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `VerticalRecyclingSystem.SetTopLeftAnchor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetTopLeftAnchor(RectTransform rectTransform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rectTransform` | `RectTransform` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetTopLeftAnchor` events in `VerticalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.verticalrecyclingsystem.settopleftanchor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.verticalrecyclingsystem.settopleftanchor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.verticalrecyclingsystem.settopleftanchor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.verticalrecyclingsystem.settopleftanchor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.verticalrecyclingsystem.settopleftanchor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.verticalrecyclingsystem.settopleftanchor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
