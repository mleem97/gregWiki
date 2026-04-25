---
title: AudioManager.PlayRandomRJ45Clip
description: Hook event for AudioManager.PlayRandomRJ45Clip
path: /api/hooks/networking/audio-manager-play-random-rj45-clip
---

# AudioManager.PlayRandomRJ45Clip

> **Hook ID:** `greg.networking.audiomanager.playrandomrj45clip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AudioManager.PlayRandomRJ45Clip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayRandomRJ45Clip()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PlayRandomRJ45Clip` events in `AudioManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.audiomanager.playrandomrj45clip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.audiomanager.playrandomrj45clip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.audiomanager.playrandomrj45clip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.audiomanager.playrandomrj45clip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.audiomanager.playrandomrj45clip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.audiomanager.playrandomrj45clip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
