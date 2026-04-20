---
title: RebindUIv2.OnDisable
description: Hook event for RebindUIv2.OnDisable
path: /api/hooks/visualui/rebind-u-iv2-on-disable
---

# RebindUIv2.OnDisable

> **Hook ID:** `greg.visualui.rebinduiv2.ondisable`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RebindUIv2.OnDisable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnDisable` events in `RebindUIv2`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rebinduiv2.ondisable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rebinduiv2.ondisable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rebinduiv2.ondisable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rebinduiv2.ondisable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rebinduiv2.ondisable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rebinduiv2.ondisable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
