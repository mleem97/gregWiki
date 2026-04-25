---
title: Unregister
description: Documentation for greg.SYSTEM.Unregister
path: /api/hooks/system/unregister
---

# Unregister

> **Hook ID:** `greg.SYSTEM.Unregister`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/DeviceTimerManager.Unregister

## Native Signature
```csharp
Il2Cpp.DeviceTimerManager::Unregister(ITimedDevice)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Unregister` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Unregister", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Unregister");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Unregister", function(payload)
    greg.log("Hook greg.SYSTEM.Unregister received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Unregister fired")

greg.on("greg.SYSTEM.Unregister", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Unregister", (payload) => {
    console.log("Hook greg.SYSTEM.Unregister triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Unregister".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Unregister", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Unregister fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
