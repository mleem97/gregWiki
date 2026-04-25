---
title: CartTotalChanged
description: Documentation for greg.SYSTEM.CartTotalChanged
path: /api/hooks/system/carttotalchanged
---

# CartTotalChanged

> **Hook ID:** `greg.SYSTEM.CartTotalChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.UpdateCartTotal

## Native Signature
```csharp
Il2Cpp.ComputerShop::UpdateCartTotal()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CartTotalChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CartTotalChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CartTotalChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CartTotalChanged", function(payload)
    greg.log("Hook greg.SYSTEM.CartTotalChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CartTotalChanged fired")

greg.on("greg.SYSTEM.CartTotalChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CartTotalChanged", (payload) => {
    console.log("Hook greg.SYSTEM.CartTotalChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CartTotalChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CartTotalChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CartTotalChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
