---
title: Technician.RepairDevice
description: Hook event for Technician.RepairDevice
path: /api/hooks/networking/technician-repair-device
---

# Technician.RepairDevice

> **Hook ID:** `greg.networking.technician.repairdevice`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.RepairDevice()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RepairDevice()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RepairDevice` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.technician.repairdevice", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.technician.repairdevice", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.technician.repairdevice")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.technician.repairdevice", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.technician.repairdevice", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.technician.repairdevice", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
