---
title: PlayStepSound
description: Documentation for greg.SYSTEM.PlayStepSound
path: /api/hooks/system/playstepsound
---

# PlayStepSound

> **Hook ID:** `greg.SYSTEM.PlayStepSound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.PlayStepSound

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::PlayStepSound()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayStepSound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayStepSound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayStepSound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayStepSound", function(payload)
    greg.log("Hook greg.SYSTEM.PlayStepSound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayStepSound fired")

greg.on("greg.SYSTEM.PlayStepSound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayStepSound", (payload) => {
    console.log("Hook greg.SYSTEM.PlayStepSound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayStepSound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayStepSound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayStepSound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
