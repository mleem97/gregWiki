---
title: MainMenu.QuitGame
description: Hook event for MainMenu.QuitGame
path: /api/hooks/lifecycle/main-menu-quit-game
---

# MainMenu.QuitGame

> **Hook ID:** `greg.lifecycle.mainmenu.quitgame`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.QuitGame()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void QuitGame()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `QuitGame` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.mainmenu.quitgame", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.mainmenu.quitgame", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.mainmenu.quitgame")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.mainmenu.quitgame", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.mainmenu.quitgame", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.mainmenu.quitgame", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
