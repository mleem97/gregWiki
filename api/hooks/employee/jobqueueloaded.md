---
title: JobQueueLoaded
description: Documentation for greg.EMPLOYEE.JobQueueLoaded
path: /api/hooks/employee/jobqueueloaded
---

# JobQueueLoaded

> **Hook ID:** `greg.EMPLOYEE.JobQueueLoaded`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.RestoreJobQueue

## Native Signature
```csharp
Il2Cpp.TechnicianManager::RestoreJobQueue(List<RepairJobSaveData>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `savedJobs` | `List<RepairJobSaveData>` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `JobQueueLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.JobQueueLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.JobQueueLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.JobQueueLoaded", function(payload)
    greg.log("Hook greg.EMPLOYEE.JobQueueLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.JobQueueLoaded fired")

greg.on("greg.EMPLOYEE.JobQueueLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.JobQueueLoaded", (payload) => {
    console.log("Hook greg.EMPLOYEE.JobQueueLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.JobQueueLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.JobQueueLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.JobQueueLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
