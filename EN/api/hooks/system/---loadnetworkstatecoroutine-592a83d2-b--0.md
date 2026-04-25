---
title: ___LoadNetworkStateCoroutine_592A83D2_b__0
description: Documentation for greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0
path: /api/hooks/system/---loadnetworkstatecoroutine-592a83d2-b--0
---

# ___LoadNetworkStateCoroutine_592A83D2_b__0

> **Hook ID:** `greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__c__DisplayClass50_0.___LoadNetworkStateCoroutine_592A83D2_b__0

## Native Signature
```csharp
Il2Cpp.__c__DisplayClass50_0::___LoadNetworkStateCoroutine_592A83D2_b__0(CustomerBase)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `___LoadNetworkStateCoroutine_592A83D2_b__0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0", function(payload)
    greg.log("Hook greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0 fired")

greg.on("greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0", (payload) => {
    console.log("Hook greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.___LoadNetworkStateCoroutine_592A83D2_b__0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
