---
title: LoadingScreen.SetDifficualty
description: Hook event for LoadingScreen.SetDifficualty
path: /api/hooks/lifecycle/loading-screen-set-difficualty
---

# LoadingScreen.SetDifficualty

> **Hook ID:** `greg.lifecycle.loadingscreen.setdifficualty`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LoadingScreen.SetDifficualty()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetDifficualty(Int32 i)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `i` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetDifficualty` events in `LoadingScreen`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.loadingscreen.setdifficualty", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.loadingscreen.setdifficualty", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.loadingscreen.setdifficualty")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.loadingscreen.setdifficualty", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.loadingscreen.setdifficualty", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.loadingscreen.setdifficualty", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
