---
title: SettingsGraphics.SetResDropDown
description: Hook event for SettingsGraphics.SetResDropDown
path: /api/hooks/visualui/settings-graphics-set-res-drop-down
---

# SettingsGraphics.SetResDropDown

> **Hook ID:** `greg.visualui.settingsgraphics.setresdropdown`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.SetResDropDown()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetResDropDown(Int32 resolutionIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `resolutionIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetResDropDown` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.setresdropdown", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.setresdropdown", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.setresdropdown")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.setresdropdown", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.setresdropdown", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.setresdropdown", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
