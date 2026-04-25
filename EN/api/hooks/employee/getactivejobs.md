---
title: GetActiveJobs
description: Documentation for greg.EMPLOYEE.GetActiveJobs
path: /api/hooks/employee/getactivejobs
---

# GetActiveJobs

> **Hook ID:** `greg.EMPLOYEE.GetActiveJobs`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.GetActiveJobs

## Native Signature
```csharp
Il2Cpp.TechnicianManager::GetActiveJobs()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|


## Using this Hook

::: tip
Subscribe to this hook to react to `GetActiveJobs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.GetActiveJobs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.GetActiveJobs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.GetActiveJobs", function(payload)
    greg.log("Hook greg.EMPLOYEE.GetActiveJobs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.GetActiveJobs fired")

greg.on("greg.EMPLOYEE.GetActiveJobs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.GetActiveJobs", (payload) => {
    console.log("Hook greg.EMPLOYEE.GetActiveJobs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.GetActiveJobs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.GetActiveJobs", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.GetActiveJobs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
