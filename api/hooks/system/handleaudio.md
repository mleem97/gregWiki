---
title: HandleAudio
description: Documentation for greg.SYSTEM.HandleAudio
path: /api/hooks/system/handleaudio
---

# HandleAudio

> **Hook ID:** `greg.SYSTEM.HandleAudio`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.HandleAudio

## Native Signature
```csharp
Il2Cpp.CarController::HandleAudio()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleAudio` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HandleAudio", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HandleAudio");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HandleAudio", function(payload)
    greg.log("Hook greg.SYSTEM.HandleAudio received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HandleAudio fired")

greg.on("greg.SYSTEM.HandleAudio", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HandleAudio", (payload) => {
    console.log("Hook greg.SYSTEM.HandleAudio triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HandleAudio".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HandleAudio", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HandleAudio fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
