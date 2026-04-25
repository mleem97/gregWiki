---
title: SettingsSingleton.DisableOnAfterFirstSettingUp
description: Hook event for SettingsSingleton.DisableOnAfterFirstSettingUp
path: /api/hooks/settings/settings-singleton-disable-on-after-first-setting-up
---

# SettingsSingleton.DisableOnAfterFirstSettingUp

> **Hook ID:** `greg.settings.settingssingleton.disableonafterfirstsettingup`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsSingleton.DisableOnAfterFirstSettingUp()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DisableOnAfterFirstSettingUp()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DisableOnAfterFirstSettingUp` events in `SettingsSingleton`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.settingssingleton.disableonafterfirstsettingup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.settingssingleton.disableonafterfirstsettingup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.settingssingleton.disableonafterfirstsettingup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.settingssingleton.disableonafterfirstsettingup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.settingssingleton.disableonafterfirstsettingup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.settingssingleton.disableonafterfirstsettingup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
