---
title: OSK_Keyboard.OnPhysicalKeyStroke
description: Hook event for OSK_Keyboard.OnPhysicalKeyStroke
path: /api/hooks/input/osk_-keyboard-on-physical-key-stroke
---

# OSK_Keyboard.OnPhysicalKeyStroke

> **Hook ID:** `greg.input.osk_keyboard.onphysicalkeystroke`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.OnPhysicalKeyStroke()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnPhysicalKeyStroke(Char c)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Char` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnPhysicalKeyStroke` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keyboard.onphysicalkeystroke", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keyboard.onphysicalkeystroke", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keyboard.onphysicalkeystroke")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keyboard.onphysicalkeystroke", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keyboard.onphysicalkeystroke", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keyboard.onphysicalkeystroke", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
