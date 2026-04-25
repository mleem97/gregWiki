---
title: CommandCenter.ToggleClearWarningAuto
description: Hook event for CommandCenter.ToggleClearWarningAuto
path: /api/hooks/lifecycle/command-center-toggle-clear-warning-auto
---

# CommandCenter.ToggleClearWarningAuto

> **Hook ID:** `greg.lifecycle.commandcenter.toggleclearwarningauto`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.ToggleClearWarningAuto()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ToggleClearWarningAuto(Boolean isOn)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isOn` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ToggleClearWarningAuto` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.commandcenter.toggleclearwarningauto", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.commandcenter.toggleclearwarningauto", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.commandcenter.toggleclearwarningauto")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.commandcenter.toggleclearwarningauto", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.commandcenter.toggleclearwarningauto", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.commandcenter.toggleclearwarningauto", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
