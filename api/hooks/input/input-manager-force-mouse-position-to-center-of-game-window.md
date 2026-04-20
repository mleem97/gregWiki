---
title: InputManager.ForceMousePositionToCenterOfGameWindow
description: Hook event for InputManager.ForceMousePositionToCenterOfGameWindow
path: /api/hooks/input/input-manager-force-mouse-position-to-center-of-game-window
---

# InputManager.ForceMousePositionToCenterOfGameWindow

> **Hook ID:** `greg.input.inputmanager.forcemousepositiontocenterofgamewindow`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `InputManager.ForceMousePositionToCenterOfGameWindow()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ForceMousePositionToCenterOfGameWindow()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ForceMousePositionToCenterOfGameWindow` events in `InputManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.inputmanager.forcemousepositiontocenterofgamewindow", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.inputmanager.forcemousepositiontocenterofgamewindow", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.inputmanager.forcemousepositiontocenterofgamewindow")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.inputmanager.forcemousepositiontocenterofgamewindow", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.inputmanager.forcemousepositiontocenterofgamewindow", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.inputmanager.forcemousepositiontocenterofgamewindow", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
