---
title: CleanUpShop
description: Documentation for greg.SYSTEM.CleanUpShop
path: /api/hooks/system/cleanupshop
---

# CleanUpShop

> **Hook ID:** `greg.SYSTEM.CleanUpShop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.CleanUpShop

## Native Signature
```csharp
Il2Cpp.ComputerShop::CleanUpShop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CleanUpShop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CleanUpShop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CleanUpShop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CleanUpShop", function(payload)
    greg.log("Hook greg.SYSTEM.CleanUpShop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CleanUpShop fired")

greg.on("greg.SYSTEM.CleanUpShop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CleanUpShop", (payload) => {
    console.log("Hook greg.SYSTEM.CleanUpShop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CleanUpShop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CleanUpShop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CleanUpShop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
