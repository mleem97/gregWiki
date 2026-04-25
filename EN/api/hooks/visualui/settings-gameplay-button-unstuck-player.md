---
title: SettingsGameplay.ButtonUnstuckPlayer
description: Hook event for SettingsGameplay.ButtonUnstuckPlayer
path: /api/hooks/visualui/settings-gameplay-button-unstuck-player
---

# SettingsGameplay.ButtonUnstuckPlayer

> **Hook ID:** `greg.visualui.settingsgameplay.buttonunstuckplayer`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGameplay.ButtonUnstuckPlayer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonUnstuckPlayer()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonUnstuckPlayer` events in `SettingsGameplay`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgameplay.buttonunstuckplayer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgameplay.buttonunstuckplayer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgameplay.buttonunstuckplayer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgameplay.buttonunstuckplayer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgameplay.buttonunstuckplayer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgameplay.buttonunstuckplayer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
