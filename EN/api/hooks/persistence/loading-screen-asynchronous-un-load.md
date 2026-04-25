---
title: LoadingScreen.AsynchronousUnLoad
description: Hook event for LoadingScreen.AsynchronousUnLoad
path: /api/hooks/persistence/loading-screen-asynchronous-un-load
---

# LoadingScreen.AsynchronousUnLoad

> **Hook ID:** `greg.persistence.loadingscreen.asynchronousunload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LoadingScreen.AsynchronousUnLoad()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AsynchronousUnLoad(Int32 sceneIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sceneIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `AsynchronousUnLoad` events in `LoadingScreen`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.loadingscreen.asynchronousunload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.loadingscreen.asynchronousunload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.loadingscreen.asynchronousunload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.loadingscreen.asynchronousunload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.loadingscreen.asynchronousunload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.loadingscreen.asynchronousunload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
