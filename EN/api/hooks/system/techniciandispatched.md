---
title: TechnicianDispatched
description: Documentation for greg.SYSTEM.TechnicianDispatched
path: /api/hooks/system/techniciandispatched
---

# TechnicianDispatched

> **Hook ID:** `greg.SYSTEM.TechnicianDispatched`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.SendTechnician

## Native Signature
```csharp
Il2Cpp.AssetManagement::SendTechnician(NetworkSwitch, Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TechnicianDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TechnicianDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TechnicianDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TechnicianDispatched", function(payload)
    greg.log("Hook greg.SYSTEM.TechnicianDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TechnicianDispatched fired")

greg.on("greg.SYSTEM.TechnicianDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TechnicianDispatched", (payload) => {
    console.log("Hook greg.SYSTEM.TechnicianDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TechnicianDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TechnicianDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TechnicianDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
