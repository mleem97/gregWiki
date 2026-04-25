---
title: GetCustomerRoutes
description: Documentation for greg.SYSTEM.GetCustomerRoutes
path: /api/hooks/system/getcustomerroutes
---

# GetCustomerRoutes

> **Hook ID:** `greg.SYSTEM.GetCustomerRoutes`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetCustomerRoutes

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetCustomerRoutes()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomerRoutes` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCustomerRoutes", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCustomerRoutes");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCustomerRoutes", function(payload)
    greg.log("Hook greg.SYSTEM.GetCustomerRoutes received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCustomerRoutes fired")

greg.on("greg.SYSTEM.GetCustomerRoutes", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCustomerRoutes", (payload) => {
    console.log("Hook greg.SYSTEM.GetCustomerRoutes triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCustomerRoutes".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCustomerRoutes", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCustomerRoutes fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
