---
title: ButtonAddAllBrokenDevicesToQueue
description: Documentation for greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue
path: /api/hooks/system/buttonaddallbrokendevicestoqueue
---

# ButtonAddAllBrokenDevicesToQueue

> **Hook ID:** `greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonAddAllBrokenDevicesToQueue

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonAddAllBrokenDevicesToQueue()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonAddAllBrokenDevicesToQueue` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue fired")

greg.on("greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonAddAllBrokenDevicesToQueue fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
