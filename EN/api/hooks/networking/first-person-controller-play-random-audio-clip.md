---
title: FirstPersonController.PlayRandomAudioClip
description: Hook event for FirstPersonController.PlayRandomAudioClip
path: /api/hooks/networking/first-person-controller-play-random-audio-clip
---

# FirstPersonController.PlayRandomAudioClip

> **Hook ID:** `greg.networking.firstpersoncontroller.playrandomaudioclip`
> **Category:** Networking
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.PlayRandomAudioClip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
AudioClip PlayRandomAudioClip(Il2CppReferenceArray`1 audioClips, Single volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `audioClips` | `Il2CppReferenceArray`1` | ... |
| `volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlayRandomAudioClip` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.firstpersoncontroller.playrandomaudioclip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.firstpersoncontroller.playrandomaudioclip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.firstpersoncontroller.playrandomaudioclip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.firstpersoncontroller.playrandomaudioclip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.firstpersoncontroller.playrandomaudioclip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.firstpersoncontroller.playrandomaudioclip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AudioClip`
- **Safe to block?**: Yes
