---
title: Dispatched
description: Documentation for greg.EMPLOYEE.Dispatched
path: /api/hooks/employee/dispatched
---

# Dispatched

> **Hook ID:** `greg.EMPLOYEE.Dispatched`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.SendTechnician

## Native Signature
```csharp
Il2Cpp.TechnicianManager::SendTechnician(NetworkSwitch, Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |
| `server` | `Server` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Dispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.Dispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.Dispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.Dispatched", function(payload)
    greg.log("Hook greg.EMPLOYEE.Dispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.Dispatched fired")

greg.on("greg.EMPLOYEE.Dispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.Dispatched", (payload) => {
    console.log("Hook greg.EMPLOYEE.Dispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.Dispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.Dispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.Dispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
