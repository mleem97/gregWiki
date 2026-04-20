---
title: OSK_UI_Keyboard.ShowHideKeyboard
description: Hook event for OSK_UI_Keyboard.ShowHideKeyboard
path: /api/hooks/visualui/osk_ui_-keyboard-show-hide-keyboard
---

# OSK_UI_Keyboard.ShowHideKeyboard

> **Hook ID:** `greg.visualui.osk_ui_keyboard.showhidekeyboard`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Keyboard.ShowHideKeyboard()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowHideKeyboard(Boolean show)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `show` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowHideKeyboard` events in `OSK_UI_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_keyboard.showhidekeyboard", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_keyboard.showhidekeyboard", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_keyboard.showhidekeyboard")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_keyboard.showhidekeyboard", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_keyboard.showhidekeyboard", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_keyboard.showhidekeyboard", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
