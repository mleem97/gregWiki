---
title: OSK_Keyboard.KeyBackspace
description: Hook event for OSK_Keyboard.KeyBackspace
path: /api/hooks/input/osk_-keyboard-key-backspace
---

# OSK_Keyboard.KeyBackspace

> **Hook ID:** `greg.input.osk_keyboard.keybackspace`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.KeyBackspace()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void KeyBackspace(OSK_Receiver receiver)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `receiver` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyBackspace` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keyboard.keybackspace", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keyboard.keybackspace", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keyboard.keybackspace")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keyboard.keybackspace", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keyboard.keybackspace", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keyboard.keybackspace", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
