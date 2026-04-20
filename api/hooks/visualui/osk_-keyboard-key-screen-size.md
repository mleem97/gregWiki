---
title: OSK_Keyboard.KeyScreenSize
description: Hook event for OSK_Keyboard.KeyScreenSize
path: /api/hooks/visualui/osk_-keyboard-key-screen-size
---

# OSK_Keyboard.KeyScreenSize

> **Hook ID:** `greg.visualui.osk_keyboard.keyscreensize`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.KeyScreenSize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector3 KeyScreenSize()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `KeyScreenSize` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.keyscreensize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.keyscreensize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.keyscreensize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.keyscreensize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.keyscreensize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.keyscreensize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector3`
- **Safe to block?**: Yes
