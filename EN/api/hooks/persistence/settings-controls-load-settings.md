---
title: SettingsControls.LoadSettings
description: Hook event for SettingsControls.LoadSettings
path: /api/hooks/persistence/settings-controls-load-settings
---

# SettingsControls.LoadSettings

> **Hook ID:** `greg.persistence.settingscontrols.loadsettings`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsControls.LoadSettings()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadSettings()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadSettings` events in `SettingsControls`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.settingscontrols.loadsettings", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.settingscontrols.loadsettings", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.settingscontrols.loadsettings")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.settingscontrols.loadsettings", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.settingscontrols.loadsettings", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.settingscontrols.loadsettings", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
