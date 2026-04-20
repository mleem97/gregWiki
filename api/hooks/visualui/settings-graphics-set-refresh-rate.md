---
title: SettingsGraphics.SetRefreshRate
description: Hook event for SettingsGraphics.SetRefreshRate
path: /api/hooks/visualui/settings-graphics-set-refresh-rate
---

# SettingsGraphics.SetRefreshRate

> **Hook ID:** `greg.visualui.settingsgraphics.setrefreshrate`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.SetRefreshRate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetRefreshRate(Int32 _refreshRate)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_refreshRate` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetRefreshRate` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.setrefreshrate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.setrefreshrate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.setrefreshrate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.setrefreshrate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.setrefreshrate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.setrefreshrate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
