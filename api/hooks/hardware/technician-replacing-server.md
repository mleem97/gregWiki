---
title: Technician.ReplacingServer
description: Hook event for Technician.ReplacingServer
path: /api/hooks/hardware/technician-replacing-server
---

# Technician.ReplacingServer

> **Hook ID:** `greg.hardware.technician.replacingserver`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.ReplacingServer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ReplacingServer()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ReplacingServer` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technician.replacingserver", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technician.replacingserver", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technician.replacingserver")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technician.replacingserver", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technician.replacingserver", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technician.replacingserver", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
