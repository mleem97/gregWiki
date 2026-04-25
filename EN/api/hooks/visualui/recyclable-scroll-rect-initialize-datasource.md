---
title: RecyclableScrollRect.Initialize
description: Hook event for RecyclableScrollRect.Initialize
path: /api/hooks/visualui/recyclable-scroll-rect-initialize-datasource
---

# RecyclableScrollRect.Initialize

> **Hook ID:** `greg.visualui.recyclablescrollrect.initialize`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclableScrollRect.Initialize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Initialize(IRecyclableScrollRectDataSource dataSource)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `dataSource` | `IRecyclableScrollRectDataSource` | ... |


## Using this Hook

::: tip
Use this hook to react to `Initialize` events in `RecyclableScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.recyclablescrollrect.initialize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.recyclablescrollrect.initialize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.recyclablescrollrect.initialize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.recyclablescrollrect.initialize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.recyclablescrollrect.initialize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.recyclablescrollrect.initialize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
