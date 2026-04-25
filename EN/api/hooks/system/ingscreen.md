---
title: ingScreen
description: Documentation for greg.SYSTEM.ingScreen.GameIsLoadedLoaded
path: /api/hooks/system/ingscreen
---

# ingScreen

> **Hook ID:** `greg.SYSTEM.ingScreen.GameIsLoadedLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GameIsLoaded.LoadingScreen.GameIsLoaded

## Native Signature
```csharp
Il2Cpp.GameIsLoaded::LoadingScreen.GameIsLoaded([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ingScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ingScreen.GameIsLoadedLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ingScreen.GameIsLoadedLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ingScreen.GameIsLoadedLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.ingScreen.GameIsLoadedLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ingScreen.GameIsLoadedLoaded fired")

greg.on("greg.SYSTEM.ingScreen.GameIsLoadedLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ingScreen.GameIsLoadedLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.ingScreen.GameIsLoadedLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ingScreen.GameIsLoadedLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ingScreen.GameIsLoadedLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ingScreen.GameIsLoadedLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
