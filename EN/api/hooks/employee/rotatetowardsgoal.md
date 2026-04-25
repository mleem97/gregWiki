---
title: RotateTowardsGoal
description: Documentation for greg.EMPLOYEE.RotateTowardsGoal
path: /api/hooks/employee/rotatetowardsgoal
---

# RotateTowardsGoal

> **Hook ID:** `greg.EMPLOYEE.RotateTowardsGoal`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.RotateTowardsGoal

## Native Signature
```csharp
Il2Cpp.Technician::RotateTowardsGoal(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RotateTowardsGoal` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.RotateTowardsGoal", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.RotateTowardsGoal");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.RotateTowardsGoal", function(payload)
    greg.log("Hook greg.EMPLOYEE.RotateTowardsGoal received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.RotateTowardsGoal fired")

greg.on("greg.EMPLOYEE.RotateTowardsGoal", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.RotateTowardsGoal", (payload) => {
    console.log("Hook greg.EMPLOYEE.RotateTowardsGoal triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.RotateTowardsGoal".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.RotateTowardsGoal", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.RotateTowardsGoal fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
