---
title: RebindUIv2.OnActionChange
description: Hook event for RebindUIv2.OnActionChange
path: /api/hooks/visualui/rebind-u-iv2-on-action-change
---

# RebindUIv2.OnActionChange

> **Hook ID:** `greg.visualui.rebinduiv2.onactionchange`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.OnActionChange()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnActionChange(Object obj, InputActionChange change)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `obj` | `Object` | ... |
| `change` | `InputActionChange` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnActionChange` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebinduiv2.onactionchange", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebinduiv2.onactionchange", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebinduiv2.onactionchange")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebinduiv2.onactionchange", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebinduiv2.onactionchange", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebinduiv2.onactionchange", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
