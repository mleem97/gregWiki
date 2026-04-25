---
title: SettingsGraphics.AvailableRefreshRatesAfterFrame
description: Hook event for SettingsGraphics.AvailableRefreshRatesAfterFrame
path: /api/hooks/visualui/settings-graphics-available-refresh-rates-after-frame
---

# SettingsGraphics.AvailableRefreshRatesAfterFrame

> **Hook ID:** `greg.visualui.settingsgraphics.availablerefreshratesafterframe`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.AvailableRefreshRatesAfterFrame()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AvailableRefreshRatesAfterFrame()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AvailableRefreshRatesAfterFrame` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.availablerefreshratesafterframe", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.availablerefreshratesafterframe", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.availablerefreshratesafterframe")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.availablerefreshratesafterframe", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.availablerefreshratesafterframe", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.availablerefreshratesafterframe", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
