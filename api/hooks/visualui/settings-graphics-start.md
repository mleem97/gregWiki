---
title: SettingsGraphics.Start
description: Hook event for SettingsGraphics.Start
path: /api/hooks/visualui/settings-graphics-start
---

# SettingsGraphics.Start

> **Hook ID:** `greg.visualui.settingsgraphics.start`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.Start()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Start()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Start` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.settingsgraphics.start", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.settingsgraphics.start", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.settingsgraphics.start")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.settingsgraphics.start", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.settingsgraphics.start", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.settingsgraphics.start", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
