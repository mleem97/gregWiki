---
title: DoesCableServeMultipleCustomers
description: Documentation for greg.SYSTEM.DoesCableServeMultipleCustomers
path: /api/hooks/system/doescableservemultiplecustomers
---

# DoesCableServeMultipleCustomers

> **Hook ID:** `greg.SYSTEM.DoesCableServeMultipleCustomers`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.DoesCableServeMultipleCustomers

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::DoesCableServeMultipleCustomers(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DoesCableServeMultipleCustomers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DoesCableServeMultipleCustomers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DoesCableServeMultipleCustomers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DoesCableServeMultipleCustomers", function(payload)
    greg.log("Hook greg.SYSTEM.DoesCableServeMultipleCustomers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DoesCableServeMultipleCustomers fired")

greg.on("greg.SYSTEM.DoesCableServeMultipleCustomers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DoesCableServeMultipleCustomers", (payload) => {
    console.log("Hook greg.SYSTEM.DoesCableServeMultipleCustomers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DoesCableServeMultipleCustomers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DoesCableServeMultipleCustomers", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DoesCableServeMultipleCustomers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
