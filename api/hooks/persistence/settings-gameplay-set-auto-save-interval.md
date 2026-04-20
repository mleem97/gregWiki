---
title: SettingsGameplay.SetAutoSaveInterval
description: Hook event for SettingsGameplay.SetAutoSaveInterval
path: /api/hooks/persistence/settings-gameplay-set-auto-save-interval
---

# SettingsGameplay.SetAutoSaveInterval

> **Hook ID:** `greg.persistence.settingsgameplay.setautosaveinterval`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsGameplay.SetAutoSaveInterval()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetAutoSaveInterval(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetAutoSaveInterval` events in `SettingsGameplay`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.settingsgameplay.setautosaveinterval", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.settingsgameplay.setautosaveinterval", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.settingsgameplay.setautosaveinterval")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.settingsgameplay.setautosaveinterval", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.settingsgameplay.setautosaveinterval", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.settingsgameplay.setautosaveinterval", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
