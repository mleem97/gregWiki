---
title: FootSteps.GetRandomClip
description: Hook event for FootSteps.GetRandomClip
path: /api/hooks/networking/foot-steps-get-random-clip
---

# FootSteps.GetRandomClip

> **Hook ID:** `greg.networking.footsteps.getrandomclip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FootSteps.GetRandomClip()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
AudioClip GetRandomClip()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetRandomClip` events in `FootSteps`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.footsteps.getrandomclip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.footsteps.getrandomclip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.footsteps.getrandomclip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.footsteps.getrandomclip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.footsteps.getrandomclip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.footsteps.getrandomclip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AudioClip`
- **Safe to block?**: Yes
