---
title: OSK_UI_Key.GetKeyTransform
description: Hook event for OSK_UI_Key.GetKeyTransform
path: /api/hooks/input/osk_ui_-key-get-key-transform
---

# OSK_UI_Key.GetKeyTransform

> **Hook ID:** `greg.input.osk_ui_key.getkeytransform`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Key.GetKeyTransform()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Transform GetKeyTransform()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetKeyTransform` events in `OSK_UI_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_ui_key.getkeytransform", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_ui_key.getkeytransform", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_ui_key.getkeytransform")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_ui_key.getkeytransform", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_ui_key.getkeytransform", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_ui_key.getkeytransform", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Transform`
- **Safe to block?**: Yes
