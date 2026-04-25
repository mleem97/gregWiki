---
title: OSK_Keyboard.KeyCallBase
description: Hook event for OSK_Keyboard.KeyCallBase
path: /api/hooks/input/osk_-keyboard-key-call-base
---

# OSK_Keyboard.KeyCallBase

> **Hook ID:** `greg.input.osk_keyboard.keycallbase`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.KeyCallBase()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void KeyCallBase(OSK_KeyCode k, OSK_Receiver receiver)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `OSK_KeyCode` | ... |
| `receiver` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyCallBase` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keyboard.keycallbase", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keyboard.keycallbase", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keyboard.keycallbase")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keyboard.keycallbase", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keyboard.keycallbase", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keyboard.keycallbase", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
