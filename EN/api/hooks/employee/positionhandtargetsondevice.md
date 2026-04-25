---
title: PositionHandTargetsOnDevice
description: Documentation for greg.EMPLOYEE.PositionHandTargetsOnDevice
path: /api/hooks/employee/positionhandtargetsondevice
---

# PositionHandTargetsOnDevice

> **Hook ID:** `greg.EMPLOYEE.PositionHandTargetsOnDevice`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.PositionHandTargetsOnDevice

## Native Signature
```csharp
Il2Cpp.Technician::PositionHandTargetsOnDevice(GameObject)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PositionHandTargetsOnDevice` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.PositionHandTargetsOnDevice", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.PositionHandTargetsOnDevice");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.PositionHandTargetsOnDevice", function(payload)
    greg.log("Hook greg.EMPLOYEE.PositionHandTargetsOnDevice received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.PositionHandTargetsOnDevice fired")

greg.on("greg.EMPLOYEE.PositionHandTargetsOnDevice", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.PositionHandTargetsOnDevice", (payload) => {
    console.log("Hook greg.EMPLOYEE.PositionHandTargetsOnDevice triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.PositionHandTargetsOnDevice".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.PositionHandTargetsOnDevice", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.PositionHandTargetsOnDevice fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
