---
title: SettingsGraphics.IsDLSSSupported
description: Hook event for SettingsGraphics.IsDLSSSupported
path: /api/hooks/visualui/settings-graphics-is-dlss-supported
---

# SettingsGraphics.IsDLSSSupported

> **Hook ID:** `greg.visualui.settingsgraphics.isdlsssupported`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.IsDLSSSupported()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsDLSSSupported()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsDLSSSupported` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.isdlsssupported", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.isdlsssupported", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.isdlsssupported")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.isdlsssupported", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.isdlsssupported", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.isdlsssupported", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
