---
title: AssignJob
description: Documentation for greg.EMPLOYEE.AssignJob
path: /api/hooks/employee/assignjob
---

# AssignJob

> **Hook ID:** `greg.EMPLOYEE.AssignJob`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.AssignJob

## Native Signature
```csharp
Il2Cpp.Technician::AssignJob(TechnicianManager.RepairJob)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AssignJob` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.AssignJob", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.AssignJob");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.AssignJob", function(payload)
    greg.log("Hook greg.EMPLOYEE.AssignJob received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.AssignJob fired")

greg.on("greg.EMPLOYEE.AssignJob", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.AssignJob", (payload) => {
    console.log("Hook greg.EMPLOYEE.AssignJob triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.AssignJob".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.AssignJob", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.AssignJob fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
