---
title: PlayLandingSound
description: Documentation for greg.SYSTEM.PlayLandingSound
path: /api/hooks/system/playlandingsound
---

# PlayLandingSound

> **Hook ID:** `greg.SYSTEM.PlayLandingSound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.PlayLandingSound

## Native Signature
```csharp
Il2Cpp.FirstPersonController::PlayLandingSound()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayLandingSound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayLandingSound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayLandingSound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayLandingSound", function(payload)
    greg.log("Hook greg.SYSTEM.PlayLandingSound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayLandingSound fired")

greg.on("greg.SYSTEM.PlayLandingSound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayLandingSound", (payload) => {
    console.log("Hook greg.SYSTEM.PlayLandingSound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayLandingSound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayLandingSound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayLandingSound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
