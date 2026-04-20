---
title: SettingsControls.InvertY
description: Hook event for SettingsControls.InvertY
path: /api/hooks/input/settings-controls-invert-y
---

# SettingsControls.InvertY

> **Hook ID:** `greg.input.settingscontrols.inverty`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SettingsControls.InvertY()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InvertY()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InvertY` events in `SettingsControls`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.settingscontrols.inverty", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.settingscontrols.inverty", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.settingscontrols.inverty")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.settingscontrols.inverty", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.settingscontrols.inverty", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.settingscontrols.inverty", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
