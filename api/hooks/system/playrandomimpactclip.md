---
title: PlayRandomImpactClip
description: Documentation for greg.SYSTEM.PlayRandomImpactClip
path: /api/hooks/system/playrandomimpactclip
---

# PlayRandomImpactClip

> **Hook ID:** `greg.SYSTEM.PlayRandomImpactClip`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.PlayRandomImpactClip

## Native Signature
```csharp
Il2Cpp.AudioManager::PlayRandomImpactClip(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayRandomImpactClip` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayRandomImpactClip", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayRandomImpactClip");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayRandomImpactClip", function(payload)
    greg.log("Hook greg.SYSTEM.PlayRandomImpactClip received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayRandomImpactClip fired")

greg.on("greg.SYSTEM.PlayRandomImpactClip", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayRandomImpactClip", (payload) => {
    console.log("Hook greg.SYSTEM.PlayRandomImpactClip triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayRandomImpactClip".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayRandomImpactClip", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayRandomImpactClip fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
