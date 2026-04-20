---
title: SettingsGraphics.MoveToMonitorCoroutine
description: Hook event for SettingsGraphics.MoveToMonitorCoroutine
path: /api/hooks/character/settings-graphics-move-to-monitor-coroutine
---

# SettingsGraphics.MoveToMonitorCoroutine

> **Hook ID:** `greg.character.settingsgraphics.movetomonitorcoroutine`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGraphics.MoveToMonitorCoroutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator MoveToMonitorCoroutine(DisplayInfo targetDisplay, Boolean restoreFullScreen)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `targetDisplay` | `DisplayInfo` | ... |
| `restoreFullScreen` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `MoveToMonitorCoroutine` events in `SettingsGraphics`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.settingsgraphics.movetomonitorcoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.settingsgraphics.movetomonitorcoroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.settingsgraphics.movetomonitorcoroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.settingsgraphics.movetomonitorcoroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.settingsgraphics.movetomonitorcoroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.settingsgraphics.movetomonitorcoroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
