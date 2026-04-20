---
title: SettingsGraphics.SetResolution
description: Hook event for SettingsGraphics.SetResolution
path: /api/hooks/visualui/settings-graphics-set-resolution
---

# SettingsGraphics.SetResolution

> **Hook ID:** `greg.visualui.settingsgraphics.setresolution`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.SetResolution()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetResolution(Int32 width, Int32 height)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `width` | `Int32` | ... |
| `height` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetResolution` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.setresolution", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.setresolution", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.setresolution")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.setresolution", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.setresolution", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.setresolution", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
