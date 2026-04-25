---
title: FirstPersonController.PlayLandingSound
description: Hook event for FirstPersonController.PlayLandingSound
path: /api/hooks/audio/first-person-controller-play-landing-sound
---

# FirstPersonController.PlayLandingSound

> **Hook ID:** `greg.audio.firstpersoncontroller.playlandingsound`
> **Category:** Audio
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.PlayLandingSound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayLandingSound()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayLandingSound` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.firstpersoncontroller.playlandingsound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.firstpersoncontroller.playlandingsound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.firstpersoncontroller.playlandingsound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.firstpersoncontroller.playlandingsound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.firstpersoncontroller.playlandingsound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.firstpersoncontroller.playlandingsound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
