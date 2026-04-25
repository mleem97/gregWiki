---
title: RebindUIv2.UpdateActionLabel
description: Hook event for RebindUIv2.UpdateActionLabel
path: /api/hooks/visualui/rebind-u-iv2-update-action-label
---

# RebindUIv2.UpdateActionLabel

> **Hook ID:** `greg.visualui.rebinduiv2.updateactionlabel`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.UpdateActionLabel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateActionLabel()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateActionLabel` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebinduiv2.updateactionlabel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebinduiv2.updateactionlabel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebinduiv2.updateactionlabel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebinduiv2.updateactionlabel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebinduiv2.updateactionlabel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebinduiv2.updateactionlabel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
