---
title: OSK_Key.OnMouseUp
description: Hook event for OSK_Key.OnMouseUp
path: /api/hooks/input/osk_-key-on-mouse-up
---

# OSK_Key.OnMouseUp

> **Hook ID:** `greg.input.osk_key.onmouseup`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Key.OnMouseUp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnMouseUp()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnMouseUp` events in `OSK_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_key.onmouseup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_key.onmouseup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_key.onmouseup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_key.onmouseup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_key.onmouseup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_key.onmouseup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
