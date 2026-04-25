---
title: TruckComing
description: Documentation for greg.SYSTEM.TruckComing
path: /api/hooks/system/truckcoming
---

# TruckComing

> **Hook ID:** `greg.SYSTEM.TruckComing`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GateLever.TruckComing

## Native Signature
```csharp
Il2Cpp.GateLever::TruckComing()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TruckComing` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TruckComing", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TruckComing");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TruckComing", function(payload)
    greg.log("Hook greg.SYSTEM.TruckComing received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TruckComing fired")

greg.on("greg.SYSTEM.TruckComing", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TruckComing", (payload) => {
    console.log("Hook greg.SYSTEM.TruckComing triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TruckComing".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TruckComing", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TruckComing fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
