---
title: Fired
description: Documentation for greg.EMPLOYEE.Fired
path: /api/hooks/employee/fired
---

# Fired

> **Hook ID:** `greg.EMPLOYEE.Fired`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.FireTechnician

## Native Signature
```csharp
Il2Cpp.TechnicianManager::FireTechnician(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `technicianID` | `int` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Fired` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.Fired", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.Fired");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.Fired", function(payload)
    greg.log("Hook greg.EMPLOYEE.Fired received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.Fired fired")

greg.on("greg.EMPLOYEE.Fired", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.Fired", (payload) => {
    console.log("Hook greg.EMPLOYEE.Fired triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.Fired".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.Fired", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.Fired fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
