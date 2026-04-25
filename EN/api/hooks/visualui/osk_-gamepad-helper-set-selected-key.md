---
title: OSK_GamepadHelper.SetSelectedKey
description: Hook event for OSK_GamepadHelper.SetSelectedKey
path: /api/hooks/visualui/osk_-gamepad-helper-set-selected-key
---

# OSK_GamepadHelper.SetSelectedKey

> **Hook ID:** `greg.visualui.osk_gamepadhelper.setselectedkey`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GamepadHelper.SetSelectedKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetSelectedKey(OSK_Key k)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `OSK_Key` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetSelectedKey` events in `OSK_GamepadHelper`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_gamepadhelper.setselectedkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_gamepadhelper.setselectedkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_gamepadhelper.setselectedkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_gamepadhelper.setselectedkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_gamepadhelper.setselectedkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_gamepadhelper.setselectedkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
