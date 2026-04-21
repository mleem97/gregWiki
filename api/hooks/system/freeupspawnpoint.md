---
title: FreeUpSpawnPoint
description: Documentation for greg.SYSTEM.FreeUpSpawnPoint
path: /api/hooks/system/freeupspawnpoint
---

# FreeUpSpawnPoint

> **Hook ID:** `greg.SYSTEM.FreeUpSpawnPoint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.FreeUpSpawnPoint

## Native Signature
```csharp
Il2Cpp.ComputerShop::FreeUpSpawnPoint(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FreeUpSpawnPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FreeUpSpawnPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FreeUpSpawnPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FreeUpSpawnPoint", function(payload)
    greg.log("Hook greg.SYSTEM.FreeUpSpawnPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FreeUpSpawnPoint fired")

greg.on("greg.SYSTEM.FreeUpSpawnPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FreeUpSpawnPoint", (payload) => {
    console.log("Hook greg.SYSTEM.FreeUpSpawnPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FreeUpSpawnPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FreeUpSpawnPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FreeUpSpawnPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
