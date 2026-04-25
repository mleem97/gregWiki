---
title: ButtonHireEmployee
description: Documentation for greg.EMPLOYEE.ButtonHireEmployee
path: /api/hooks/employee/buttonhireemployee
---

# ButtonHireEmployee

> **Hook ID:** `greg.EMPLOYEE.ButtonHireEmployee`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/HRSystem.ButtonHireEmployee

## Native Signature
```csharp
Il2Cpp.HRSystem::ButtonHireEmployee(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonHireEmployee` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ButtonHireEmployee", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ButtonHireEmployee");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ButtonHireEmployee", function(payload)
    greg.log("Hook greg.EMPLOYEE.ButtonHireEmployee received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ButtonHireEmployee fired")

greg.on("greg.EMPLOYEE.ButtonHireEmployee", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ButtonHireEmployee", (payload) => {
    console.log("Hook greg.EMPLOYEE.ButtonHireEmployee triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ButtonHireEmployee".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ButtonHireEmployee", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ButtonHireEmployee fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
