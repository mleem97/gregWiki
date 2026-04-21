---
title: ButtonFireEmployee
description: Documentation for greg.EMPLOYEE.ButtonFireEmployee
path: /api/hooks/employee/buttonfireemployee
---

# ButtonFireEmployee

> **Hook ID:** `greg.EMPLOYEE.ButtonFireEmployee`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/HRSystem.ButtonFireEmployee

## Native Signature
```csharp
Il2Cpp.HRSystem::ButtonFireEmployee(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFireEmployee` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ButtonFireEmployee", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ButtonFireEmployee");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ButtonFireEmployee", function(payload)
    greg.log("Hook greg.EMPLOYEE.ButtonFireEmployee received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ButtonFireEmployee fired")

greg.on("greg.EMPLOYEE.ButtonFireEmployee", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ButtonFireEmployee", (payload) => {
    console.log("Hook greg.EMPLOYEE.ButtonFireEmployee triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ButtonFireEmployee".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ButtonFireEmployee", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ButtonFireEmployee fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
