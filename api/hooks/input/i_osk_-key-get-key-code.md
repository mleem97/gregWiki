---
title: I_OSK_Key.GetKeyCode
description: Hook event for I_OSK_Key.GetKeyCode
path: /api/hooks/input/i_osk_-key-get-key-code
---

# I_OSK_Key.GetKeyCode

> **Hook ID:** `greg.input.i_osk_key.getkeycode`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `I_OSK_Key.GetKeyCode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
OSK_KeyCode GetKeyCode()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetKeyCode` events in `I_OSK_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.i_osk_key.getkeycode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.i_osk_key.getkeycode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.i_osk_key.getkeycode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.i_osk_key.getkeycode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.i_osk_key.getkeycode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.i_osk_key.getkeycode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `OSK_KeyCode`
- **Safe to block?**: Yes
