---
title: MainMenu.HideMiddleMenu
description: Hook event for MainMenu.HideMiddleMenu
path: /api/hooks/visualui/main-menu-hide-middle-menu
---

# MainMenu.HideMiddleMenu

> **Hook ID:** `greg.visualui.mainmenu.hidemiddlemenu`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.HideMiddleMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HideMiddleMenu()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `HideMiddleMenu` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.mainmenu.hidemiddlemenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.mainmenu.hidemiddlemenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.mainmenu.hidemiddlemenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.mainmenu.hidemiddlemenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.mainmenu.hidemiddlemenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.mainmenu.hidemiddlemenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
