---
title: RebindUIv2._UpdateBindingDisplay_b__30_0
description: Hook event for RebindUIv2._UpdateBindingDisplay_b__30_0
path: /api/hooks/visualui/rebind-u-iv2-_-update-binding-display_b__30_0
---

# RebindUIv2._UpdateBindingDisplay_b__30_0

> **Hook ID:** `greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2._UpdateBindingDisplay_b__30_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean _UpdateBindingDisplay_b__30_0(InputBinding x)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `x` | `InputBinding` | ... |


## Using this Hook

::: tip
Use this hook to react to `_UpdateBindingDisplay_b__30_0` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebinduiv2._updatebindingdisplay_b__30_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
