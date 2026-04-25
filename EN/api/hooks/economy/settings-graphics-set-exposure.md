---
title: SettingsGraphics.SetExposure
description: Hook event for SettingsGraphics.SetExposure
path: /api/hooks/economy/settings-graphics-set-exposure
---

# SettingsGraphics.SetExposure

> **Hook ID:** `greg.economy.settingsgraphics.setexposure`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.SetExposure()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetExposure(Single exposure)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `exposure` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetExposure` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.settingsgraphics.setexposure", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.settingsgraphics.setexposure", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.settingsgraphics.setexposure")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.settingsgraphics.setexposure", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.settingsgraphics.setexposure", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.settingsgraphics.setexposure", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
