---
title: ProcessDispatchQueue
description: Documentation for greg.EMPLOYEE.ProcessDispatchQueue
path: /api/hooks/employee/processdispatchqueue
---

# ProcessDispatchQueue

> **Hook ID:** `greg.EMPLOYEE.ProcessDispatchQueue`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.ProcessDispatchQueue

## Native Signature
```csharp
Il2Cpp.TechnicianManager::ProcessDispatchQueue()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|


## Using this Hook

::: tip
Subscribe to this hook to react to `ProcessDispatchQueue` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ProcessDispatchQueue", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ProcessDispatchQueue");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ProcessDispatchQueue", function(payload)
    greg.log("Hook greg.EMPLOYEE.ProcessDispatchQueue received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ProcessDispatchQueue fired")

greg.on("greg.EMPLOYEE.ProcessDispatchQueue", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ProcessDispatchQueue", (payload) => {
    console.log("Hook greg.EMPLOYEE.ProcessDispatchQueue triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ProcessDispatchQueue".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ProcessDispatchQueue", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ProcessDispatchQueue fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
