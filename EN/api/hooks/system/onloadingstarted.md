---
title: OnLoadingStarted
description: Documentation for greg.SYSTEM.OnLoadingStarted
path: /api/hooks/system/onloadingstarted
---

# OnLoadingStarted

> **Hook ID:** `greg.SYSTEM.OnLoadingStarted`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.OnLoadingStarted

## Native Signature
```csharp
Il2Cpp.StaticUIElements::OnLoadingStarted()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoadingStarted` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLoadingStarted", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLoadingStarted");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLoadingStarted", function(payload)
    greg.log("Hook greg.SYSTEM.OnLoadingStarted received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLoadingStarted fired")

greg.on("greg.SYSTEM.OnLoadingStarted", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLoadingStarted", (payload) => {
    console.log("Hook greg.SYSTEM.OnLoadingStarted triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLoadingStarted".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLoadingStarted", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLoadingStarted fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
