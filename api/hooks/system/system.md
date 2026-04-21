---
title: System
description: Documentation for greg.SYSTEM.System.OnLoadingDataLaterSaved
path: /api/hooks/system/system
---

# System

> **Hook ID:** `greg.SYSTEM.System.OnLoadingDataLaterSaved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnLoadingDataLater.SaveSystem.OnLoadingDataLater

## Native Signature
```csharp
Il2Cpp.OnLoadingDataLater::SaveSystem.OnLoadingDataLater([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `System` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.System.OnLoadingDataLaterSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.System.OnLoadingDataLaterSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.System.OnLoadingDataLaterSaved", function(payload)
    greg.log("Hook greg.SYSTEM.System.OnLoadingDataLaterSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.System.OnLoadingDataLaterSaved fired")

greg.on("greg.SYSTEM.System.OnLoadingDataLaterSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.System.OnLoadingDataLaterSaved", (payload) => {
    console.log("Hook greg.SYSTEM.System.OnLoadingDataLaterSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.System.OnLoadingDataLaterSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.System.OnLoadingDataLaterSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.System.OnLoadingDataLaterSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
