---
title: PlaySelectKeySound
description: Documentation for greg.SYSTEM.PlaySelectKeySound
path: /api/hooks/system/playselectkeysound
---

# PlaySelectKeySound

> **Hook ID:** `greg.SYSTEM.PlaySelectKeySound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_KeySounds.PlaySelectKeySound

## Native Signature
```csharp
Il2Cpp.OSK_KeySounds::PlaySelectKeySound()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlaySelectKeySound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlaySelectKeySound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlaySelectKeySound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlaySelectKeySound", function(payload)
    greg.log("Hook greg.SYSTEM.PlaySelectKeySound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlaySelectKeySound fired")

greg.on("greg.SYSTEM.PlaySelectKeySound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlaySelectKeySound", (payload) => {
    console.log("Hook greg.SYSTEM.PlaySelectKeySound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlaySelectKeySound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlaySelectKeySound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlaySelectKeySound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
