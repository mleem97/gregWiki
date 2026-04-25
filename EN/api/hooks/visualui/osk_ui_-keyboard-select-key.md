---
title: OSK_UI_Keyboard.SelectKey
description: Hook event for OSK_UI_Keyboard.SelectKey
path: /api/hooks/visualui/osk_ui_-keyboard-select-key
---

# OSK_UI_Keyboard.SelectKey

> **Hook ID:** `greg.visualui.osk_ui_keyboard.selectkey`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Keyboard.SelectKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator SelectKey(OSK_UI_Key selKey)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `selKey` | `OSK_UI_Key` | ... |


## Using this Hook

::: tip
Use this hook to react to `SelectKey` events in `OSK_UI_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_ui_keyboard.selectkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_ui_keyboard.selectkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_ui_keyboard.selectkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_ui_keyboard.selectkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_ui_keyboard.selectkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_ui_keyboard.selectkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
