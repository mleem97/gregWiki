---
title: TryUnlock
description: Documentation for greg.SYSTEM.TryUnlock
path: /api/hooks/system/tryunlock
---

# TryUnlock

> **Hook ID:** `greg.SYSTEM.TryUnlock`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ShopItem.TryUnlock

## Native Signature
```csharp
Il2Cpp.ShopItem::TryUnlock()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TryUnlock` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TryUnlock", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TryUnlock");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TryUnlock", function(payload)
    greg.log("Hook greg.SYSTEM.TryUnlock received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TryUnlock fired")

greg.on("greg.SYSTEM.TryUnlock", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TryUnlock", (payload) => {
    console.log("Hook greg.SYSTEM.TryUnlock triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TryUnlock".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TryUnlock", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TryUnlock fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
