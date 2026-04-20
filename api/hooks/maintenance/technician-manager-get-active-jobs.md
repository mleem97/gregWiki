---
title: TechnicianManager.GetActiveJobs
description: Hook event for TechnicianManager.GetActiveJobs
path: /api/hooks/maintenance/technician-manager-get-active-jobs
---

# TechnicianManager.GetActiveJobs

> **Hook ID:** `greg.maintenance.technicianmanager.getactivejobs`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.GetActiveJobs()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 GetActiveJobs()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetActiveJobs` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technicianmanager.getactivejobs", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technicianmanager.getactivejobs", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technicianmanager.getactivejobs")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technicianmanager.getactivejobs", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technicianmanager.getactivejobs", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technicianmanager.getactivejobs", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
