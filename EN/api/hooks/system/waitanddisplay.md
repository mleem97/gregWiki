---
title: WaitAndDisplay
description: Documentation for greg.SYSTEM.WaitAndDisplay
path: /api/hooks/system/waitanddisplay
---

# WaitAndDisplay

> **Hook ID:** `greg.SYSTEM.WaitAndDisplay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SteamStatsOnMainMenuTop.WaitAndDisplay

## Native Signature
```csharp
Il2Cpp.SteamStatsOnMainMenuTop::WaitAndDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `WaitAndDisplay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.WaitAndDisplay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.WaitAndDisplay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.WaitAndDisplay", function(payload)
    greg.log("Hook greg.SYSTEM.WaitAndDisplay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.WaitAndDisplay fired")

greg.on("greg.SYSTEM.WaitAndDisplay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.WaitAndDisplay", (payload) => {
    console.log("Hook greg.SYSTEM.WaitAndDisplay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.WaitAndDisplay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.WaitAndDisplay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.WaitAndDisplay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
