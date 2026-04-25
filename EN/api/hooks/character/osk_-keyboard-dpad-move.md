---
title: OSK_Keyboard.DpadMove
description: Hook event for OSK_Keyboard.DpadMove
path: /api/hooks/character/osk_-keyboard-dpad-move
---

# OSK_Keyboard.DpadMove

> **Hook ID:** `greg.character.osk_keyboard.dpadmove`
> **Category:** Character
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.DpadMove()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DpadMove(Vector2 dir)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `dir` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `DpadMove` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.osk_keyboard.dpadmove", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.osk_keyboard.dpadmove", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.osk_keyboard.dpadmove")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.osk_keyboard.dpadmove", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.osk_keyboard.dpadmove", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.osk_keyboard.dpadmove", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
