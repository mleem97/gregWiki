---
title: InputManager.ConfinedCursorforUI
description: Hook event for InputManager.ConfinedCursorforUI
path: /api/hooks/visualui/input-manager-confined-cursorfor-ui
---

# InputManager.ConfinedCursorforUI

> **Hook ID:** `greg.visualui.inputmanager.confinedcursorforui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.ConfinedCursorforUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ConfinedCursorforUI()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ConfinedCursorforUI` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.inputmanager.confinedcursorforui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.inputmanager.confinedcursorforui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.inputmanager.confinedcursorforui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.inputmanager.confinedcursorforui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.inputmanager.confinedcursorforui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.inputmanager.confinedcursorforui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
