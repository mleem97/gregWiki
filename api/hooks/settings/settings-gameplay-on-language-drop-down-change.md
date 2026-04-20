---
title: SettingsGameplay.OnLanguageDropDownChange
description: Hook event for SettingsGameplay.OnLanguageDropDownChange
path: /api/hooks/settings/settings-gameplay-on-language-drop-down-change
---

# SettingsGameplay.OnLanguageDropDownChange

> **Hook ID:** `greg.settings.settingsgameplay.onlanguagedropdownchange`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGameplay.OnLanguageDropDownChange()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLanguageDropDownChange(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnLanguageDropDownChange` events in `SettingsGameplay`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.settingsgameplay.onlanguagedropdownchange", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.settingsgameplay.onlanguagedropdownchange", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.settingsgameplay.onlanguagedropdownchange")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.settingsgameplay.onlanguagedropdownchange", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.settingsgameplay.onlanguagedropdownchange", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.settingsgameplay.onlanguagedropdownchange", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
