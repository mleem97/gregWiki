---
title: PlaySound
description: Documentation for greg.SYSTEM.PlaySound
path: /api/hooks/system/playsound
---

# PlaySound

> **Hook ID:** `greg.SYSTEM.PlaySound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_KeySounds.PlaySound

## Native Signature
```csharp
Il2Cpp.OSK_KeySounds::PlaySound(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlaySound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlaySound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlaySound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlaySound", function(payload)
    greg.log("Hook greg.SYSTEM.PlaySound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlaySound fired")

greg.on("greg.SYSTEM.PlaySound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlaySound", (payload) => {
    console.log("Hook greg.SYSTEM.PlaySound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlaySound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlaySound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlaySound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
