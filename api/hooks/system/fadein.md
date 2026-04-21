---
title: FadeIn
description: Documentation for greg.SYSTEM.FadeIn
path: /api/hooks/system/fadein
---

# FadeIn

> **Hook ID:** `greg.SYSTEM.FadeIn`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.FadeIn

## Native Signature
```csharp
Il2Cpp.AudioManager::FadeIn(AudioSource, float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FadeIn` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FadeIn", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FadeIn");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FadeIn", function(payload)
    greg.log("Hook greg.SYSTEM.FadeIn received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FadeIn fired")

greg.on("greg.SYSTEM.FadeIn", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FadeIn", (payload) => {
    console.log("Hook greg.SYSTEM.FadeIn triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FadeIn".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FadeIn", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FadeIn fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
