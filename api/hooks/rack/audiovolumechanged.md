---
title: AudioVolumeChanged
description: Documentation for greg.RACK.AudioVolumeChanged
path: /api/hooks/rack/audiovolumechanged
---

# AudioVolumeChanged

> **Hook ID:** `greg.RACK.AudioVolumeChanged`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.UpdateAudioVolume

## Native Signature
```csharp
Il2Cpp.Rack::UpdateAudioVolume()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AudioVolumeChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.AudioVolumeChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.AudioVolumeChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.AudioVolumeChanged", function(payload)
    greg.log("Hook greg.RACK.AudioVolumeChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.AudioVolumeChanged fired")

greg.on("greg.RACK.AudioVolumeChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.AudioVolumeChanged", (payload) => {
    console.log("Hook greg.RACK.AudioVolumeChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.AudioVolumeChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.AudioVolumeChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.AudioVolumeChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
