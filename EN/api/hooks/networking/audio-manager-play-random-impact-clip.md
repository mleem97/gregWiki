---
title: AudioManager.PlayRandomImpactClip
description: Hook event for AudioManager.PlayRandomImpactClip
path: /api/hooks/networking/audio-manager-play-random-impact-clip
---

# AudioManager.PlayRandomImpactClip

> **Hook ID:** `greg.networking.audiomanager.playrandomimpactclip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.PlayRandomImpactClip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayRandomImpactClip(Single _volume)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_volume` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlayRandomImpactClip` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.audiomanager.playrandomimpactclip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.audiomanager.playrandomimpactclip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.audiomanager.playrandomimpactclip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.audiomanager.playrandomimpactclip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.audiomanager.playrandomimpactclip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.audiomanager.playrandomimpactclip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
