---
title: Tutorials.SkipTutorials
description: Hook event for Tutorials.SkipTutorials
path: /api/hooks/networking/tutorials-skip-tutorials
---

# Tutorials.SkipTutorials

> **Hook ID:** `greg.networking.tutorials.skiptutorials`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.SkipTutorials()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SkipTutorials()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SkipTutorials` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.tutorials.skiptutorials", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.tutorials.skiptutorials", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.tutorials.skiptutorials")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.tutorials.skiptutorials", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.tutorials.skiptutorials", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.tutorials.skiptutorials", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
