---
title: GetCorrectDevicePrefab
description: Documentation for greg.EMPLOYEE.GetCorrectDevicePrefab
path: /api/hooks/employee/getcorrectdeviceprefab
---

# GetCorrectDevicePrefab

> **Hook ID:** `greg.EMPLOYEE.GetCorrectDevicePrefab`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.GetCorrectDevicePrefab

## Native Signature
```csharp
Il2Cpp.Technician::GetCorrectDevicePrefab()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCorrectDevicePrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.GetCorrectDevicePrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.GetCorrectDevicePrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.GetCorrectDevicePrefab", function(payload)
    greg.log("Hook greg.EMPLOYEE.GetCorrectDevicePrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.GetCorrectDevicePrefab fired")

greg.on("greg.EMPLOYEE.GetCorrectDevicePrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.GetCorrectDevicePrefab", (payload) => {
    console.log("Hook greg.EMPLOYEE.GetCorrectDevicePrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.GetCorrectDevicePrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.GetCorrectDevicePrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.GetCorrectDevicePrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
