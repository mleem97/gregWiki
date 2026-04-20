---
title: MainMenu.Settings
description: Hook event for MainMenu.Settings
path: /api/hooks/settings/main-menu-settings
---

# MainMenu.Settings

> **Hook ID:** `greg.settings.mainmenu.settings`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.Settings()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Settings()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Settings` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.mainmenu.settings", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.mainmenu.settings", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.mainmenu.settings")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.mainmenu.settings", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.mainmenu.settings", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.mainmenu.settings", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
