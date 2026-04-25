---
title: ThirdPersonCharacter.PlayRandomAudioClip
description: Hook event for ThirdPersonCharacter.PlayRandomAudioClip
path: /api/hooks/networking/third-person-character-play-random-audio-clip
---

# ThirdPersonCharacter.PlayRandomAudioClip

> **Hook ID:** `greg.networking.thirdpersoncharacter.playrandomaudioclip`
> **Category:** Networking
> **Namespace:** `UnityStandardAssets.Characters.ThirdPerson`

This hook intercepts calls to `ThirdPersonCharacter.PlayRandomAudioClip()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `PlayRandomAudioClip` events in `ThirdPersonCharacter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.thirdpersoncharacter.playrandomaudioclip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.thirdpersoncharacter.playrandomaudioclip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.thirdpersoncharacter.playrandomaudioclip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.thirdpersoncharacter.playrandomaudioclip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.thirdpersoncharacter.playrandomaudioclip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.thirdpersoncharacter.playrandomaudioclip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AudioClip`
- **Safe to block?**: Yes
