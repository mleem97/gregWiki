---
title: SettingsGraphics.ChangeDepthOfField
description: Hook event for SettingsGraphics.ChangeDepthOfField
path: /api/hooks/visualui/settings-graphics-change-depth-of-field
---

# SettingsGraphics.ChangeDepthOfField

> **Hook ID:** `greg.visualui.settingsgraphics.changedepthoffield`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.ChangeDepthOfField()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ChangeDepthOfField(Single startFarFocus, Single endFarFocus)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `startFarFocus` | `Single` | ... |
| `endFarFocus` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `ChangeDepthOfField` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.changedepthoffield", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.changedepthoffield", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.changedepthoffield")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.changedepthoffield", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.changedepthoffield", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.changedepthoffield", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
