---
title: NextJobRequested
description: Documentation for greg.EMPLOYEE.NextJobRequested
path: /api/hooks/employee/nextjobrequested
---

# NextJobRequested

> **Hook ID:** `greg.EMPLOYEE.NextJobRequested`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.RequestNextJob

## Native Signature
```csharp
Il2Cpp.TechnicianManager::RequestNextJob(Technician)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `technician` | `Technician` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NextJobRequested` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.NextJobRequested", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.NextJobRequested");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.NextJobRequested", function(payload)
    greg.log("Hook greg.EMPLOYEE.NextJobRequested received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.NextJobRequested fired")

greg.on("greg.EMPLOYEE.NextJobRequested", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.NextJobRequested", (payload) => {
    console.log("Hook greg.EMPLOYEE.NextJobRequested triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.NextJobRequested".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.NextJobRequested", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.NextJobRequested fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
