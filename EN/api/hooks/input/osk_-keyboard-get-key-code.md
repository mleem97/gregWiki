---
title: OSK_Keyboard.GetKeyCode
description: Hook event for OSK_Keyboard.GetKeyCode
path: /api/hooks/input/osk_-keyboard-get-key-code
---

# OSK_Keyboard.GetKeyCode

> **Hook ID:** `greg.input.osk_keyboard.getkeycode`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.GetKeyCode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
KeyCode GetKeyCode(String c)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetKeyCode` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keyboard.getkeycode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keyboard.getkeycode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keyboard.getkeycode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keyboard.getkeycode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keyboard.getkeycode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keyboard.getkeycode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `KeyCode`
- **Safe to block?**: Yes
