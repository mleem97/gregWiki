---
title: ClearAllUIDs
description: Documentation for greg.SYSTEM.ClearAllUIDs
path: /api/hooks/system/clearalluids
---

# ClearAllUIDs

> **Hook ID:** `greg.SYSTEM.ClearAllUIDs`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopCartItem.ClearAllUIDs

## Native Signature
```csharp
Il2Cpp.ShopCartItem::ClearAllUIDs()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearAllUIDs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearAllUIDs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearAllUIDs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearAllUIDs", function(payload)
    greg.log("Hook greg.SYSTEM.ClearAllUIDs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearAllUIDs fired")

greg.on("greg.SYSTEM.ClearAllUIDs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearAllUIDs", (payload) => {
    console.log("Hook greg.SYSTEM.ClearAllUIDs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearAllUIDs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearAllUIDs", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearAllUIDs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
