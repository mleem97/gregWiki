---
title: OSK_MiniKeyboard.ResizeBackground
description: Hook event for OSK_MiniKeyboard.ResizeBackground
path: /api/hooks/visualui/osk_-mini-keyboard-resize-background
---

# OSK_MiniKeyboard.ResizeBackground

> **Hook ID:** `greg.visualui.osk_minikeyboard.resizebackground`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_MiniKeyboard.ResizeBackground()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResizeBackground()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ResizeBackground` events in `OSK_MiniKeyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_minikeyboard.resizebackground", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_minikeyboard.resizebackground", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_minikeyboard.resizebackground")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_minikeyboard.resizebackground", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_minikeyboard.resizebackground", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_minikeyboard.resizebackground", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
