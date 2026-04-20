---
title: PulsatingText.Update
description: Hook event for PulsatingText.Update
path: /api/hooks/unityengine/pulsating-text-update
---

# PulsatingText.Update

> **Hook ID:** `greg.unityengine.pulsatingtext.update`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PulsatingText.Update()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Update()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Update` events in `PulsatingText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.pulsatingtext.update", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.pulsatingtext.update", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.pulsatingtext.update")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.pulsatingtext.update", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.pulsatingtext.update", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.pulsatingtext.update", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
