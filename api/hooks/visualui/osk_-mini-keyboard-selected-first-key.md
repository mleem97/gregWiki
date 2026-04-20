---
title: OSK_MiniKeyboard.SelectedFirstKey
description: Hook event for OSK_MiniKeyboard.SelectedFirstKey
path: /api/hooks/visualui/osk_-mini-keyboard-selected-first-key
---

# OSK_MiniKeyboard.SelectedFirstKey

> **Hook ID:** `greg.visualui.osk_minikeyboard.selectedfirstkey`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_MiniKeyboard.SelectedFirstKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SelectedFirstKey()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SelectedFirstKey` events in `OSK_MiniKeyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_minikeyboard.selectedfirstkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_minikeyboard.selectedfirstkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_minikeyboard.selectedfirstkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_minikeyboard.selectedfirstkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_minikeyboard.selectedfirstkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_minikeyboard.selectedfirstkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
