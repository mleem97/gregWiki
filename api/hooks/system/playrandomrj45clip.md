---
title: PlayRandomRJ45Clip
description: Documentation for greg.SYSTEM.PlayRandomRJ45Clip
path: /api/hooks/system/playrandomrj45clip
---

# PlayRandomRJ45Clip

> **Hook ID:** `greg.SYSTEM.PlayRandomRJ45Clip`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.PlayRandomRJ45Clip

## Native Signature
```csharp
Il2Cpp.AudioManager::PlayRandomRJ45Clip()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayRandomRJ45Clip` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayRandomRJ45Clip", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayRandomRJ45Clip");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayRandomRJ45Clip", function(payload)
    greg.log("Hook greg.SYSTEM.PlayRandomRJ45Clip received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayRandomRJ45Clip fired")

greg.on("greg.SYSTEM.PlayRandomRJ45Clip", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayRandomRJ45Clip", (payload) => {
    console.log("Hook greg.SYSTEM.PlayRandomRJ45Clip triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayRandomRJ45Clip".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayRandomRJ45Clip", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayRandomRJ45Clip fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
