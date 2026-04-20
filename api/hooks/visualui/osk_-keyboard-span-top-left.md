---
title: OSK_Keyboard.SpanTopLeft
description: Hook event for OSK_Keyboard.SpanTopLeft
path: /api/hooks/visualui/osk_-keyboard-span-top-left
---

# OSK_Keyboard.SpanTopLeft

> **Hook ID:** `greg.visualui.osk_keyboard.spantopleft`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.SpanTopLeft()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector3 SpanTopLeft()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SpanTopLeft` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.spantopleft", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.spantopleft", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.spantopleft")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.spantopleft", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.spantopleft", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.spantopleft", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector3`
- **Safe to block?**: Yes
