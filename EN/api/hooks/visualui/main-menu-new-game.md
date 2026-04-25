---
title: MainMenu.NewGame
description: Hook event for MainMenu.NewGame
path: /api/hooks/visualui/main-menu-new-game
---

# MainMenu.NewGame

> **Hook ID:** `greg.visualui.mainmenu.newgame`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.NewGame()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void NewGame()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `NewGame` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.mainmenu.newgame", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.mainmenu.newgame", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.mainmenu.newgame")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.mainmenu.newgame", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.mainmenu.newgame", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.mainmenu.newgame", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
