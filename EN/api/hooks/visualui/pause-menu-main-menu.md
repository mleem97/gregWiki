---
title: PauseMenu.MainMenu
description: Hook event for PauseMenu.MainMenu
path: /api/hooks/visualui/pause-menu-main-menu
---

# PauseMenu.MainMenu

> **Hook ID:** `greg.visualui.pausemenu.mainmenu`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu.MainMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MainMenu()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `MainMenu` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pausemenu.mainmenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pausemenu.mainmenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pausemenu.mainmenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pausemenu.mainmenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pausemenu.mainmenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pausemenu.mainmenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
