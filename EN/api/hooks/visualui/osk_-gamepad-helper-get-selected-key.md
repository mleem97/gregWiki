---
title: OSK_GamepadHelper.GetSelectedKey
description: Hook event for OSK_GamepadHelper.GetSelectedKey
path: /api/hooks/visualui/osk_-gamepad-helper-get-selected-key
---

# OSK_GamepadHelper.GetSelectedKey

> **Hook ID:** `greg.visualui.osk_gamepadhelper.getselectedkey`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GamepadHelper.GetSelectedKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
OSK_Key GetSelectedKey()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetSelectedKey` events in `OSK_GamepadHelper`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_gamepadhelper.getselectedkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_gamepadhelper.getselectedkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_gamepadhelper.getselectedkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_gamepadhelper.getselectedkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_gamepadhelper.getselectedkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_gamepadhelper.getselectedkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `OSK_Key`
- **Safe to block?**: Yes
