---
title: CloseShop
description: Documentation for greg.SYSTEM.CloseShop
path: /api/hooks/system/closeshop
---

# CloseShop

> **Hook ID:** `greg.SYSTEM.CloseShop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.CloseShop

## Native Signature
```csharp
Il2Cpp.ComputerShop::CloseShop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseShop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseShop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseShop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseShop", function(payload)
    greg.log("Hook greg.SYSTEM.CloseShop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseShop fired")

greg.on("greg.SYSTEM.CloseShop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseShop", (payload) => {
    console.log("Hook greg.SYSTEM.CloseShop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseShop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseShop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseShop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
