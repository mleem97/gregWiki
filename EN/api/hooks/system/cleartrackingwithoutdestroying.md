---
title: ClearTrackingWithoutDestroying
description: Documentation for greg.SYSTEM.ClearTrackingWithoutDestroying
path: /api/hooks/system/cleartrackingwithoutdestroying
---

# ClearTrackingWithoutDestroying

> **Hook ID:** `greg.SYSTEM.ClearTrackingWithoutDestroying`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ClearTrackingWithoutDestroying

## Native Signature
```csharp
Il2Cpp.ComputerShop::ClearTrackingWithoutDestroying()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearTrackingWithoutDestroying` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearTrackingWithoutDestroying", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearTrackingWithoutDestroying");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearTrackingWithoutDestroying", function(payload)
    greg.log("Hook greg.SYSTEM.ClearTrackingWithoutDestroying received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearTrackingWithoutDestroying fired")

greg.on("greg.SYSTEM.ClearTrackingWithoutDestroying", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearTrackingWithoutDestroying", (payload) => {
    console.log("Hook greg.SYSTEM.ClearTrackingWithoutDestroying triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearTrackingWithoutDestroying".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearTrackingWithoutDestroying", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearTrackingWithoutDestroying fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
