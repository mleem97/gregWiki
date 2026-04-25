---
title: RebindUIv2.ResetToDefault
description: Hook event for RebindUIv2.ResetToDefault
path: /api/hooks/visualui/rebind-u-iv2-reset-to-default
---

# RebindUIv2.ResetToDefault

> **Hook ID:** `greg.visualui.rebinduiv2.resettodefault`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.ResetToDefault()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetToDefault()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ResetToDefault` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebinduiv2.resettodefault", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebinduiv2.resettodefault", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebinduiv2.resettodefault")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebinduiv2.resettodefault", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebinduiv2.resettodefault", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebinduiv2.resettodefault", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
