---
title: CoinsAndPrestige_TopLeftChanged
description: Documentation for greg.SYSTEM.CoinsAndPrestige_TopLeftChanged
path: /api/hooks/system/coinsandprestige-topleftchanged
---

# CoinsAndPrestige_TopLeftChanged

> **Hook ID:** `greg.SYSTEM.CoinsAndPrestige_TopLeftChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.UpdateCoinsAndPrestige_TopLeft

## Native Signature
```csharp
Il2Cpp.StaticUIElements::UpdateCoinsAndPrestige_TopLeft()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CoinsAndPrestige_TopLeftChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CoinsAndPrestige_TopLeftChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CoinsAndPrestige_TopLeftChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CoinsAndPrestige_TopLeftChanged", function(payload)
    greg.log("Hook greg.SYSTEM.CoinsAndPrestige_TopLeftChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CoinsAndPrestige_TopLeftChanged fired")

greg.on("greg.SYSTEM.CoinsAndPrestige_TopLeftChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CoinsAndPrestige_TopLeftChanged", (payload) => {
    console.log("Hook greg.SYSTEM.CoinsAndPrestige_TopLeftChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CoinsAndPrestige_TopLeftChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CoinsAndPrestige_TopLeftChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CoinsAndPrestige_TopLeftChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
