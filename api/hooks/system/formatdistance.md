---
title: FormatDistance
description: Documentation for greg.SYSTEM.FormatDistance
path: /api/hooks/system/formatdistance
---

# FormatDistance

> **Hook ID:** `greg.SYSTEM.FormatDistance`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SteamStatsOnMainMenuTop.FormatDistance

## Native Signature
```csharp
Il2Cpp.SteamStatsOnMainMenuTop::FormatDistance(double)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FormatDistance` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FormatDistance", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FormatDistance");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FormatDistance", function(payload)
    greg.log("Hook greg.SYSTEM.FormatDistance received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FormatDistance fired")

greg.on("greg.SYSTEM.FormatDistance", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FormatDistance", (payload) => {
    console.log("Hook greg.SYSTEM.FormatDistance triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FormatDistance".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FormatDistance", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FormatDistance fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
