---
title: CommandCenter.AutoRepairRoutine
description: Hook event for CommandCenter.AutoRepairRoutine
path: /api/hooks/hardware/command-center-auto-repair-routine
---

# CommandCenter.AutoRepairRoutine

> **Hook ID:** `greg.hardware.commandcenter.autorepairroutine`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.AutoRepairRoutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AutoRepairRoutine()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AutoRepairRoutine` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.commandcenter.autorepairroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.commandcenter.autorepairroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.commandcenter.autorepairroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.commandcenter.autorepairroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.commandcenter.autorepairroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.commandcenter.autorepairroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
