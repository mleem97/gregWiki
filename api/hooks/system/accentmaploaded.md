---
title: AccentMapLoaded
description: Documentation for greg.SYSTEM.AccentMapLoaded
path: /api/hooks/system/accentmaploaded
---

# AccentMapLoaded

> **Hook ID:** `greg.SYSTEM.AccentMapLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.LoadAccentMap

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::LoadAccentMap(OSK_AccentAssetObj)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AccentMapLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AccentMapLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AccentMapLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AccentMapLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.AccentMapLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AccentMapLoaded fired")

greg.on("greg.SYSTEM.AccentMapLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AccentMapLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.AccentMapLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AccentMapLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AccentMapLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AccentMapLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
