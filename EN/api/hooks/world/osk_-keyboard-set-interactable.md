---
title: OSK_Keyboard.SetInteractable
description: Hook event for OSK_Keyboard.SetInteractable
path: /api/hooks/world/osk_-keyboard-set-interactable
---

# OSK_Keyboard.SetInteractable

> **Hook ID:** `greg.world.osk_keyboard.setinteractable`
> **Category:** World
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.SetInteractable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetInteractable(Boolean isInteractable)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isInteractable` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetInteractable` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.osk_keyboard.setinteractable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.osk_keyboard.setinteractable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.osk_keyboard.setinteractable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.osk_keyboard.setinteractable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.osk_keyboard.setinteractable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.osk_keyboard.setinteractable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
