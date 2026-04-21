---
title: InitOnPlayMode
description: Documentation for greg.SYSTEM.InitOnPlayMode
path: /api/hooks/system/initonplaymode
---

# InitOnPlayMode

> **Hook ID:** `greg.SYSTEM.InitOnPlayMode`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SteamManager.InitOnPlayMode

## Native Signature
```csharp
Il2Cpp.SteamManager::InitOnPlayMode()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitOnPlayMode` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitOnPlayMode", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitOnPlayMode");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitOnPlayMode", function(payload)
    greg.log("Hook greg.SYSTEM.InitOnPlayMode received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitOnPlayMode fired")

greg.on("greg.SYSTEM.InitOnPlayMode", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitOnPlayMode", (payload) => {
    console.log("Hook greg.SYSTEM.InitOnPlayMode triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitOnPlayMode".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitOnPlayMode", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitOnPlayMode fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
