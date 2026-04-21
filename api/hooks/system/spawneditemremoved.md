---
title: SpawnedItemRemoved
description: Documentation for greg.SYSTEM.SpawnedItemRemoved
path: /api/hooks/system/spawneditemremoved
---

# SpawnedItemRemoved

> **Hook ID:** `greg.SYSTEM.SpawnedItemRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.RemoveSpawnedItem

## Native Signature
```csharp
Il2Cpp.ComputerShop::RemoveSpawnedItem(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SpawnedItemRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SpawnedItemRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SpawnedItemRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SpawnedItemRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.SpawnedItemRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SpawnedItemRemoved fired")

greg.on("greg.SYSTEM.SpawnedItemRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SpawnedItemRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.SpawnedItemRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SpawnedItemRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SpawnedItemRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SpawnedItemRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
