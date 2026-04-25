---
title: MainMenu.Continue
description: Hook event for MainMenu.Continue
path: /api/hooks/visualui/main-menu-continue
---

# MainMenu.Continue

> **Hook ID:** `greg.visualui.mainmenu.continue`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.Continue()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Continue()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Continue` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.mainmenu.continue", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.mainmenu.continue", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.mainmenu.continue")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.mainmenu.continue", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.mainmenu.continue", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.mainmenu.continue", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
