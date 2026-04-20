---
title: OSK_UI_Keyboard.KeyCall
description: Hook event for OSK_UI_Keyboard.KeyCall
path: /api/hooks/input/osk_ui_-keyboard-key-call
---

# OSK_UI_Keyboard.KeyCall

> **Hook ID:** `greg.input.osk_ui_keyboard.keycall`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Keyboard.KeyCall()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void KeyCall(OSK_KeyCode k, OSK_Receiver receiver)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `OSK_KeyCode` | ... |
| `receiver` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyCall` events in `OSK_UI_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_ui_keyboard.keycall", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_ui_keyboard.keycall", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_ui_keyboard.keycall")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_ui_keyboard.keycall", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_ui_keyboard.keycall", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_ui_keyboard.keycall", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
