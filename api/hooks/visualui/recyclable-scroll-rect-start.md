---
title: RecyclableScrollRect.Start
description: Hook event for RecyclableScrollRect.Start
path: /api/hooks/visualui/recyclable-scroll-rect-start
---

# RecyclableScrollRect.Start

> **Hook ID:** `greg.visualui.recyclablescrollrect.start`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclableScrollRect.Start()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Start()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Start` events in `RecyclableScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.recyclablescrollrect.start", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.recyclablescrollrect.start", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.recyclablescrollrect.start")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.recyclablescrollrect.start", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.recyclablescrollrect.start", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.recyclablescrollrect.start", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
