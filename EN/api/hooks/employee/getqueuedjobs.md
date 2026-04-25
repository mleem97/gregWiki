---
title: GetQueuedJobs
description: Documentation for greg.EMPLOYEE.GetQueuedJobs
path: /api/hooks/employee/getqueuedjobs
---

# GetQueuedJobs

> **Hook ID:** `greg.EMPLOYEE.GetQueuedJobs`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.GetQueuedJobs

## Native Signature
```csharp
Il2Cpp.TechnicianManager::GetQueuedJobs()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|


## Using this Hook

::: tip
Subscribe to this hook to react to `GetQueuedJobs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.GetQueuedJobs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.GetQueuedJobs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.GetQueuedJobs", function(payload)
    greg.log("Hook greg.EMPLOYEE.GetQueuedJobs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.GetQueuedJobs fired")

greg.on("greg.EMPLOYEE.GetQueuedJobs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.GetQueuedJobs", (payload) => {
    console.log("Hook greg.EMPLOYEE.GetQueuedJobs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.GetQueuedJobs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.GetQueuedJobs", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.GetQueuedJobs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
