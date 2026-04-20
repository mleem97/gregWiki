---
title: TechnicianManager.ProcessDispatchQueue
description: Hook event for TechnicianManager.ProcessDispatchQueue
path: /api/hooks/maintenance/technician-manager-process-dispatch-queue
---

# TechnicianManager.ProcessDispatchQueue

> **Hook ID:** `greg.maintenance.technicianmanager.processdispatchqueue`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.ProcessDispatchQueue()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ProcessDispatchQueue()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ProcessDispatchQueue` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technicianmanager.processdispatchqueue", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technicianmanager.processdispatchqueue", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technicianmanager.processdispatchqueue")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technicianmanager.processdispatchqueue", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technicianmanager.processdispatchqueue", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technicianmanager.processdispatchqueue", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
