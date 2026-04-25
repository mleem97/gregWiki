---
title: OnGlobalStatsReceived
description: Documentation for greg.SYSTEM.OnGlobalStatsReceived
path: /api/hooks/system/onglobalstatsreceived
---

# OnGlobalStatsReceived

> **Hook ID:** `greg.SYSTEM.OnGlobalStatsReceived`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SteamStatsOnMainMenuTop.OnGlobalStatsReceived

## Native Signature
```csharp
Il2Cpp.SteamStatsOnMainMenuTop::OnGlobalStatsReceived(GlobalStatsReceived_t, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnGlobalStatsReceived` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnGlobalStatsReceived", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnGlobalStatsReceived");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnGlobalStatsReceived", function(payload)
    greg.log("Hook greg.SYSTEM.OnGlobalStatsReceived received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnGlobalStatsReceived fired")

greg.on("greg.SYSTEM.OnGlobalStatsReceived", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnGlobalStatsReceived", (payload) => {
    console.log("Hook greg.SYSTEM.OnGlobalStatsReceived triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnGlobalStatsReceived".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnGlobalStatsReceived", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnGlobalStatsReceived fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
