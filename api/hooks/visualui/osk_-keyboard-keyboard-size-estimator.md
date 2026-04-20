---
title: OSK_Keyboard.KeyboardSizeEstimator
description: Hook event for OSK_Keyboard.KeyboardSizeEstimator
path: /api/hooks/visualui/osk_-keyboard-keyboard-size-estimator
---

# OSK_Keyboard.KeyboardSizeEstimator

> **Hook ID:** `greg.visualui.osk_keyboard.keyboardsizeestimator`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.KeyboardSizeEstimator()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector3 KeyboardSizeEstimator()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `KeyboardSizeEstimator` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.keyboardsizeestimator", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.keyboardsizeestimator", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.keyboardsizeestimator")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.keyboardsizeestimator", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.keyboardsizeestimator", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.keyboardsizeestimator", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector3`
- **Safe to block?**: Yes
