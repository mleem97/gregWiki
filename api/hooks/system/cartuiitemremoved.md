---
title: CartUIItemRemoved
description: Documentation for greg.SYSTEM.CartUIItemRemoved
path: /api/hooks/system/cartuiitemremoved
---

# CartUIItemRemoved

> **Hook ID:** `greg.SYSTEM.CartUIItemRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.RemoveCartUIItem

## Native Signature
```csharp
Il2Cpp.ComputerShop::RemoveCartUIItem(ShopCartItem)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CartUIItemRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CartUIItemRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CartUIItemRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CartUIItemRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.CartUIItemRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CartUIItemRemoved fired")

greg.on("greg.SYSTEM.CartUIItemRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CartUIItemRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.CartUIItemRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CartUIItemRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CartUIItemRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CartUIItemRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
