---
title: CommandCenter.SetAutoRepairMode
description: Hook event for CommandCenter.SetAutoRepairMode
path: /api/hooks/hardware/command-center-set-auto-repair-mode
---

# CommandCenter.SetAutoRepairMode

> **Hook ID:** `greg.hardware.commandcenter.setautorepairmode`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.SetAutoRepairMode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetAutoRepairMode(Int32 mode)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `mode` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetAutoRepairMode` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.commandcenter.setautorepairmode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.commandcenter.setautorepairmode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.commandcenter.setautorepairmode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.commandcenter.setautorepairmode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.commandcenter.setautorepairmode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.commandcenter.setautorepairmode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
