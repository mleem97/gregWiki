---
title: AudioManager.FadeIn
description: Hook event for AudioManager.FadeIn
path: /api/hooks/audio/audio-manager-fade-in
---

# AudioManager.FadeIn

> **Hook ID:** `greg.audio.audiomanager.fadein`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.FadeIn()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator FadeIn(AudioSource audioSource, Single FadeTime, Single finalVolume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `audioSource` | `AudioSource` | ... |
| `FadeTime` | `Single` | ... |
| `finalVolume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `FadeIn` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.audiomanager.fadein", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.audiomanager.fadein", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.audiomanager.fadein")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.audiomanager.fadein", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.audiomanager.fadein", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.audiomanager.fadein", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
