---
title: GetPrefabForItem
description: Documentation for greg.SYSTEM.GetPrefabForItem
path: /api/hooks/system/getprefabforitem
---

# GetPrefabForItem

> **Hook ID:** `greg.SYSTEM.GetPrefabForItem`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.GetPrefabForItem

## Native Signature
```csharp
Il2Cpp.ComputerShop::GetPrefabForItem(int, PlayerManager.ObjectInHand)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPrefabForItem` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPrefabForItem", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPrefabForItem");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPrefabForItem", function(payload)
    greg.log("Hook greg.SYSTEM.GetPrefabForItem received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPrefabForItem fired")

greg.on("greg.SYSTEM.GetPrefabForItem", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPrefabForItem", (payload) => {
    console.log("Hook greg.SYSTEM.GetPrefabForItem triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPrefabForItem".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPrefabForItem", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPrefabForItem fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
