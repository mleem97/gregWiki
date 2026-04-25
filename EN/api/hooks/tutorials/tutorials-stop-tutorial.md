---
title: Tutorials.StopTutorial
description: Hook event for Tutorials.StopTutorial
path: /api/hooks/tutorials/tutorials-stop-tutorial
---

# Tutorials.StopTutorial

> **Hook ID:** `greg.tutorials.tutorials.stoptutorial`
> **Category:** Tutorials
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.StopTutorial()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StopTutorial()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StopTutorial` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.tutorials.tutorials.stoptutorial", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.tutorials.tutorials.stoptutorial", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.tutorials.tutorials.stoptutorial")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.tutorials.tutorials.stoptutorial", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.tutorials.tutorials.stoptutorial", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.tutorials.tutorials.stoptutorial", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
