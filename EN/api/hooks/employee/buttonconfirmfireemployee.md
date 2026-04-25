---
title: ButtonConfirmFireEmployee
description: Documentation for greg.EMPLOYEE.ButtonConfirmFireEmployee
path: /api/hooks/employee/buttonconfirmfireemployee
---

# ButtonConfirmFireEmployee

> **Hook ID:** `greg.EMPLOYEE.ButtonConfirmFireEmployee`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/HRSystem.ButtonConfirmFireEmployee

## Native Signature
```csharp
Il2Cpp.HRSystem::ButtonConfirmFireEmployee()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonConfirmFireEmployee` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ButtonConfirmFireEmployee", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ButtonConfirmFireEmployee");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ButtonConfirmFireEmployee", function(payload)
    greg.log("Hook greg.EMPLOYEE.ButtonConfirmFireEmployee received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ButtonConfirmFireEmployee fired")

greg.on("greg.EMPLOYEE.ButtonConfirmFireEmployee", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ButtonConfirmFireEmployee", (payload) => {
    console.log("Hook greg.EMPLOYEE.ButtonConfirmFireEmployee triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ButtonConfirmFireEmployee".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ButtonConfirmFireEmployee", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ButtonConfirmFireEmployee fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
