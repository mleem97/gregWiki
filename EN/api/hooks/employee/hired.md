---
title: Hired
description: Documentation for greg.EMPLOYEE.Hired
path: /api/hooks/employee/hired
---

# Hired

> **Hook ID:** `greg.EMPLOYEE.Hired`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.AddTechnician

## Native Signature
```csharp
Il2Cpp.TechnicianManager::AddTechnician(Technician)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `technician` | `Technician` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Hired` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.Hired", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.Hired");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.Hired", function(payload)
    greg.log("Hook greg.EMPLOYEE.Hired received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.Hired fired")

greg.on("greg.EMPLOYEE.Hired", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.Hired", (payload) => {
    console.log("Hook greg.EMPLOYEE.Hired triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.Hired".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.Hired", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.Hired fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
