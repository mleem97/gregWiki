---
title: OSK_Keyboard.ButtonA
description: Hook event for OSK_Keyboard.ButtonA
path: /api/hooks/visualui/osk_-keyboard-button-a
---

# OSK_Keyboard.ButtonA

> **Hook ID:** `greg.visualui.osk_keyboard.buttona`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.ButtonA()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonA()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonA` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.buttona", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.buttona", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.buttona")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.buttona", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.buttona", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.buttona", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
