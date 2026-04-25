---
title: IsDeviceAlreadyAssigned
description: Documentation for greg.EMPLOYEE.IsDeviceAlreadyAssigned
path: /api/hooks/employee/isdevicealreadyassigned
---

# IsDeviceAlreadyAssigned

> **Hook ID:** `greg.EMPLOYEE.IsDeviceAlreadyAssigned`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.IsDeviceAlreadyAssigned

## Native Signature
```csharp
Il2Cpp.TechnicianManager::IsDeviceAlreadyAssigned(NetworkSwitch, Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |
| `server` | `Server` | ... |
| `assigned` | `bool` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsDeviceAlreadyAssigned` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.IsDeviceAlreadyAssigned", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.IsDeviceAlreadyAssigned");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.IsDeviceAlreadyAssigned", function(payload)
    greg.log("Hook greg.EMPLOYEE.IsDeviceAlreadyAssigned received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.IsDeviceAlreadyAssigned fired")

greg.on("greg.EMPLOYEE.IsDeviceAlreadyAssigned", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.IsDeviceAlreadyAssigned", (payload) => {
    console.log("Hook greg.EMPLOYEE.IsDeviceAlreadyAssigned triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.IsDeviceAlreadyAssigned".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.IsDeviceAlreadyAssigned", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.IsDeviceAlreadyAssigned fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
