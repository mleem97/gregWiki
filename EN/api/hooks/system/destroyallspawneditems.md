---
title: DestroyAllSpawnedItems
description: Documentation for greg.SYSTEM.DestroyAllSpawnedItems
path: /api/hooks/system/destroyallspawneditems
---

# DestroyAllSpawnedItems

> **Hook ID:** `greg.SYSTEM.DestroyAllSpawnedItems`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.DestroyAllSpawnedItems

## Native Signature
```csharp
Il2Cpp.ComputerShop::DestroyAllSpawnedItems()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DestroyAllSpawnedItems` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DestroyAllSpawnedItems", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DestroyAllSpawnedItems");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DestroyAllSpawnedItems", function(payload)
    greg.log("Hook greg.SYSTEM.DestroyAllSpawnedItems received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DestroyAllSpawnedItems fired")

greg.on("greg.SYSTEM.DestroyAllSpawnedItems", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DestroyAllSpawnedItems", (payload) => {
    console.log("Hook greg.SYSTEM.DestroyAllSpawnedItems triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DestroyAllSpawnedItems".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DestroyAllSpawnedItems", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DestroyAllSpawnedItems fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
