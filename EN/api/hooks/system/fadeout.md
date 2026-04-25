---
title: FadeOut
description: Documentation for greg.SYSTEM.FadeOut
path: /api/hooks/system/fadeout
---

# FadeOut

> **Hook ID:** `greg.SYSTEM.FadeOut`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.FadeOut

## Native Signature
```csharp
Il2Cpp.AudioManager::FadeOut(AudioSource, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FadeOut` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FadeOut", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FadeOut");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FadeOut", function(payload)
    greg.log("Hook greg.SYSTEM.FadeOut received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FadeOut fired")

greg.on("greg.SYSTEM.FadeOut", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FadeOut", (payload) => {
    console.log("Hook greg.SYSTEM.FadeOut triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FadeOut".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FadeOut", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FadeOut fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
