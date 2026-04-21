---
title: GetNextAvailableSpawnPoint
description: Documentation for greg.SYSTEM.GetNextAvailableSpawnPoint
path: /api/hooks/system/getnextavailablespawnpoint
---

# GetNextAvailableSpawnPoint

> **Hook ID:** `greg.SYSTEM.GetNextAvailableSpawnPoint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.GetNextAvailableSpawnPoint

## Native Signature
```csharp
Il2Cpp.ComputerShop::GetNextAvailableSpawnPoint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetNextAvailableSpawnPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetNextAvailableSpawnPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetNextAvailableSpawnPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetNextAvailableSpawnPoint", function(payload)
    greg.log("Hook greg.SYSTEM.GetNextAvailableSpawnPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetNextAvailableSpawnPoint fired")

greg.on("greg.SYSTEM.GetNextAvailableSpawnPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetNextAvailableSpawnPoint", (payload) => {
    console.log("Hook greg.SYSTEM.GetNextAvailableSpawnPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetNextAvailableSpawnPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetNextAvailableSpawnPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetNextAvailableSpawnPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
