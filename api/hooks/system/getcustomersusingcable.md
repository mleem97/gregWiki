---
title: GetCustomersUsingCable
description: Documentation for greg.SYSTEM.GetCustomersUsingCable
path: /api/hooks/system/getcustomersusingcable
---

# GetCustomersUsingCable

> **Hook ID:** `greg.SYSTEM.GetCustomersUsingCable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetCustomersUsingCable

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetCustomersUsingCable(WaypointInitializationSystem.CableInfo)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomersUsingCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCustomersUsingCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCustomersUsingCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCustomersUsingCable", function(payload)
    greg.log("Hook greg.SYSTEM.GetCustomersUsingCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCustomersUsingCable fired")

greg.on("greg.SYSTEM.GetCustomersUsingCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCustomersUsingCable", (payload) => {
    console.log("Hook greg.SYSTEM.GetCustomersUsingCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCustomersUsingCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCustomersUsingCable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCustomersUsingCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
