---
title: HandIKWeightSet
description: Documentation for greg.EMPLOYEE.HandIKWeightSet
path: /api/hooks/employee/handikweightset
---

# HandIKWeightSet

> **Hook ID:** `greg.EMPLOYEE.HandIKWeightSet`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.SetHandIKWeight

## Native Signature
```csharp
Il2Cpp.Technician::SetHandIKWeight(float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandIKWeightSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.HandIKWeightSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.HandIKWeightSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.HandIKWeightSet", function(payload)
    greg.log("Hook greg.EMPLOYEE.HandIKWeightSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.HandIKWeightSet fired")

greg.on("greg.EMPLOYEE.HandIKWeightSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.HandIKWeightSet", (payload) => {
    console.log("Hook greg.EMPLOYEE.HandIKWeightSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.HandIKWeightSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.HandIKWeightSet", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.HandIKWeightSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
