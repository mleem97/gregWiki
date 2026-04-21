---
title: LoadingInfoSet
description: Documentation for greg.SYSTEM.LoadingInfoSet
path: /api/hooks/system/loadinginfoset
---

# LoadingInfoSet

> **Hook ID:** `greg.SYSTEM.LoadingInfoSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.SetLoadingInfo

## Native Signature
```csharp
Il2Cpp.StaticUIElements::SetLoadingInfo(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LoadingInfoSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LoadingInfoSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LoadingInfoSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LoadingInfoSet", function(payload)
    greg.log("Hook greg.SYSTEM.LoadingInfoSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LoadingInfoSet fired")

greg.on("greg.SYSTEM.LoadingInfoSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LoadingInfoSet", (payload) => {
    console.log("Hook greg.SYSTEM.LoadingInfoSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LoadingInfoSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LoadingInfoSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LoadingInfoSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
