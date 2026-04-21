---
title: JobQueued
description: Documentation for greg.EMPLOYEE.JobQueued
path: /api/hooks/employee/jobqueued
---

# JobQueued

> **Hook ID:** `greg.EMPLOYEE.JobQueued`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.EnqueueDispatch

## Native Signature
```csharp
Il2Cpp.TechnicianManager::EnqueueDispatch(TechnicianManager.RepairJob)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `job` | `TechnicianManager.RepairJob` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `JobQueued` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.JobQueued", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.JobQueued");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.JobQueued", function(payload)
    greg.log("Hook greg.EMPLOYEE.JobQueued received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.JobQueued fired")

greg.on("greg.EMPLOYEE.JobQueued", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.JobQueued", (payload) => {
    console.log("Hook greg.EMPLOYEE.JobQueued triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.JobQueued".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.JobQueued", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.JobQueued fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
