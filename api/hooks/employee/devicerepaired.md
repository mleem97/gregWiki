---
title: DeviceRepaired
description: Documentation for greg.EMPLOYEE.DeviceRepaired
path: /api/hooks/employee/devicerepaired
---

# DeviceRepaired

> **Hook ID:** `greg.EMPLOYEE.DeviceRepaired`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.RepairDevice

## Native Signature
```csharp
Il2Cpp.Technician::RepairDevice()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeviceRepaired` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.DeviceRepaired", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.DeviceRepaired");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.DeviceRepaired", function(payload)
    greg.log("Hook greg.EMPLOYEE.DeviceRepaired received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.DeviceRepaired fired")

greg.on("greg.EMPLOYEE.DeviceRepaired", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.DeviceRepaired", (payload) => {
    console.log("Hook greg.EMPLOYEE.DeviceRepaired triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.DeviceRepaired".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.DeviceRepaired", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.DeviceRepaired fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
