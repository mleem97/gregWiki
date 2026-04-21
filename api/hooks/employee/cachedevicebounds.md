---
title: CacheDeviceBounds
description: Documentation for greg.EMPLOYEE.CacheDeviceBounds
path: /api/hooks/employee/cachedevicebounds
---

# CacheDeviceBounds

> **Hook ID:** `greg.EMPLOYEE.CacheDeviceBounds`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.CacheDeviceBounds

## Native Signature
```csharp
Il2Cpp.Technician::CacheDeviceBounds(GameObject)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CacheDeviceBounds` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.CacheDeviceBounds", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.CacheDeviceBounds");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.CacheDeviceBounds", function(payload)
    greg.log("Hook greg.EMPLOYEE.CacheDeviceBounds received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.CacheDeviceBounds fired")

greg.on("greg.EMPLOYEE.CacheDeviceBounds", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.CacheDeviceBounds", (payload) => {
    console.log("Hook greg.EMPLOYEE.CacheDeviceBounds triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.CacheDeviceBounds".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.CacheDeviceBounds", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.CacheDeviceBounds fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
