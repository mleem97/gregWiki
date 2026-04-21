---
title: SpawnedItemAdded
description: Documentation for greg.SYSTEM.SpawnedItemAdded
path: /api/hooks/system/spawneditemadded
---

# SpawnedItemAdded

> **Hook ID:** `greg.SYSTEM.SpawnedItemAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.AddSpawnedItem

## Native Signature
```csharp
Il2Cpp.ShopCartItem::AddSpawnedItem(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SpawnedItemAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SpawnedItemAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SpawnedItemAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SpawnedItemAdded", function(payload)
    greg.log("Hook greg.SYSTEM.SpawnedItemAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SpawnedItemAdded fired")

greg.on("greg.SYSTEM.SpawnedItemAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SpawnedItemAdded", (payload) => {
    console.log("Hook greg.SYSTEM.SpawnedItemAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SpawnedItemAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SpawnedItemAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SpawnedItemAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
