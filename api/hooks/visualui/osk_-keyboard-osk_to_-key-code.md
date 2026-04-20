---
title: OSK_Keyboard.OSK_to_KeyCode
description: Hook event for OSK_Keyboard.OSK_to_KeyCode
path: /api/hooks/visualui/osk_-keyboard-osk_to_-key-code
---

# OSK_Keyboard.OSK_to_KeyCode

> **Hook ID:** `greg.visualui.osk_keyboard.osk_to_keycode`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.OSK_to_KeyCode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
KeyCode OSK_to_KeyCode(OSK_KeyCode k)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `OSK_KeyCode` | ... |


## Using this Hook

::: tip
Use this hook to react to `OSK_to_KeyCode` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.osk_to_keycode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.osk_to_keycode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.osk_to_keycode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.osk_to_keycode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.osk_to_keycode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.osk_to_keycode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `KeyCode`
- **Safe to block?**: Yes
