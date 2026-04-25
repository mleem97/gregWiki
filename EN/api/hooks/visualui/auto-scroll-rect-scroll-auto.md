---
title: AutoScrollRect.ScrollAuto
description: Hook event for AutoScrollRect.ScrollAuto
path: /api/hooks/visualui/auto-scroll-rect-scroll-auto
---

# AutoScrollRect.ScrollAuto

> **Hook ID:** `greg.visualui.autoscrollrect.scrollauto`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AutoScrollRect.ScrollAuto()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ScrollAuto()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ScrollAuto` events in `AutoScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.autoscrollrect.scrollauto", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.autoscrollrect.scrollauto", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.autoscrollrect.scrollauto")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.autoscrollrect.scrollauto", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.autoscrollrect.scrollauto", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.autoscrollrect.scrollauto", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
