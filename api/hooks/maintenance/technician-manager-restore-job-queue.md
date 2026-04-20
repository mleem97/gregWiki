---
title: TechnicianManager.RestoreJobQueue
description: Hook event for TechnicianManager.RestoreJobQueue
path: /api/hooks/maintenance/technician-manager-restore-job-queue
---

# TechnicianManager.RestoreJobQueue

> **Hook ID:** `greg.maintenance.technicianmanager.restorejobqueue`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.RestoreJobQueue()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RestoreJobQueue(List`1 savedJobs)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `savedJobs` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `RestoreJobQueue` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technicianmanager.restorejobqueue", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technicianmanager.restorejobqueue", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technicianmanager.restorejobqueue")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technicianmanager.restorejobqueue", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technicianmanager.restorejobqueue", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technicianmanager.restorejobqueue", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
