---
title: PlayerManager.ConfinedCursorforUI
description: Hook event for PlayerManager.ConfinedCursorforUI
path: /api/hooks/visualui/player-manager-confined-cursorfor-ui
---

# PlayerManager.ConfinedCursorforUI

> **Hook ID:** `greg.visualui.playermanager.confinedcursorforui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PlayerManager.ConfinedCursorforUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ConfinedCursorforUI()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ConfinedCursorforUI` events in `PlayerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.playermanager.confinedcursorforui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.playermanager.confinedcursorforui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.playermanager.confinedcursorforui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.playermanager.confinedcursorforui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.playermanager.confinedcursorforui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.playermanager.confinedcursorforui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
