---
title: PlayRequestedStepSound
description: Documentation for greg.SYSTEM.PlayRequestedStepSound
path: /api/hooks/system/playrequestedstepsound
---

# PlayRequestedStepSound

> **Hook ID:** `greg.SYSTEM.PlayRequestedStepSound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FootSteps.PlayRequestedStepSound

## Native Signature
```csharp
Il2Cpp.FootSteps::PlayRequestedStepSound(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayRequestedStepSound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayRequestedStepSound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayRequestedStepSound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayRequestedStepSound", function(payload)
    greg.log("Hook greg.SYSTEM.PlayRequestedStepSound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayRequestedStepSound fired")

greg.on("greg.SYSTEM.PlayRequestedStepSound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayRequestedStepSound", (payload) => {
    console.log("Hook greg.SYSTEM.PlayRequestedStepSound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayRequestedStepSound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayRequestedStepSound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayRequestedStepSound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
