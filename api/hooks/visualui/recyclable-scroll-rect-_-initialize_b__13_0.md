---
title: RecyclableScrollRect._Initialize_b__13_0
description: Hook event for RecyclableScrollRect._Initialize_b__13_0
path: /api/hooks/visualui/recyclable-scroll-rect-_-initialize_b__13_0
---

# RecyclableScrollRect._Initialize_b__13_0

> **Hook ID:** `greg.visualui.recyclablescrollrect._initialize_b__13_0`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclableScrollRect._Initialize_b__13_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Initialize_b__13_0()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `_Initialize_b__13_0` events in `RecyclableScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.recyclablescrollrect._initialize_b__13_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.recyclablescrollrect._initialize_b__13_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.recyclablescrollrect._initialize_b__13_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.recyclablescrollrect._initialize_b__13_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.recyclablescrollrect._initialize_b__13_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.recyclablescrollrect._initialize_b__13_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
