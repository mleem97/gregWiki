---
title: SettingsControls.LookSensitivity
description: Hook event for SettingsControls.LookSensitivity
path: /api/hooks/character/settings-controls-look-sensitivity
---

# SettingsControls.LookSensitivity

> **Hook ID:** `greg.character.settingscontrols.looksensitivity`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsControls.LookSensitivity()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LookSensitivity(Single fl)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `fl` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `LookSensitivity` events in `SettingsControls`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.settingscontrols.looksensitivity", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.settingscontrols.looksensitivity", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.settingscontrols.looksensitivity")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.settingscontrols.looksensitivity", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.settingscontrols.looksensitivity", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.settingscontrols.looksensitivity", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
