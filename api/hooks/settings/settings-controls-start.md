---
title: SettingsControls.Start
description: Hook event for SettingsControls.Start
path: /api/hooks/settings/settings-controls-start
---

# SettingsControls.Start

> **Hook ID:** `greg.settings.settingscontrols.start`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsControls.Start()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Start()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Start` events in `SettingsControls`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.settingscontrols.start", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.settingscontrols.start", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.settingscontrols.start")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.settingscontrols.start", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.settingscontrols.start", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.settingscontrols.start", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
