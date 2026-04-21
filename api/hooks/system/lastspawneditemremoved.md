---
title: LastSpawnedItemRemoved
description: Documentation for greg.SYSTEM.LastSpawnedItemRemoved
path: /api/hooks/system/lastspawneditemremoved
---

# LastSpawnedItemRemoved

> **Hook ID:** `greg.SYSTEM.LastSpawnedItemRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.RemoveLastSpawnedItem

## Native Signature
```csharp
Il2Cpp.ShopCartItem::RemoveLastSpawnedItem()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LastSpawnedItemRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LastSpawnedItemRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LastSpawnedItemRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LastSpawnedItemRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.LastSpawnedItemRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LastSpawnedItemRemoved fired")

greg.on("greg.SYSTEM.LastSpawnedItemRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LastSpawnedItemRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.LastSpawnedItemRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LastSpawnedItemRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LastSpawnedItemRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LastSpawnedItemRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
