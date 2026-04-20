---
title: OSK_Keyboard.KeyDelete
description: Hook event for OSK_Keyboard.KeyDelete
path: /api/hooks/input/osk_-keyboard-key-delete
---

# OSK_Keyboard.KeyDelete

> **Hook ID:** `greg.input.osk_keyboard.keydelete`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.KeyDelete()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void KeyDelete(OSK_Receiver receiver)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `receiver` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyDelete` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keyboard.keydelete", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keyboard.keydelete", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keyboard.keydelete")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keyboard.keydelete", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keyboard.keydelete", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keyboard.keydelete", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
