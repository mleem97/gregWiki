---
title: RecyclableScrollRect.OnValueChangedListener
description: Hook event for RecyclableScrollRect.OnValueChangedListener
path: /api/hooks/visualui/recyclable-scroll-rect-on-value-changed-listener
---

# RecyclableScrollRect.OnValueChangedListener

> **Hook ID:** `greg.visualui.recyclablescrollrect.onvaluechangedlistener`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclableScrollRect.OnValueChangedListener()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnValueChangedListener(Vector2 normalizedPos)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `normalizedPos` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnValueChangedListener` events in `RecyclableScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.recyclablescrollrect.onvaluechangedlistener", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.recyclablescrollrect.onvaluechangedlistener", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.recyclablescrollrect.onvaluechangedlistener")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.recyclablescrollrect.onvaluechangedlistener", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.recyclablescrollrect.onvaluechangedlistener", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.recyclablescrollrect.onvaluechangedlistener", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
