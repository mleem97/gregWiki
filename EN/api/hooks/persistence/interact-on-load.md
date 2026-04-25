---
title: Interact.OnLoad
description: Hook event for Interact.OnLoad
path: /api/hooks/persistence/interact-on-load
---

# Interact.OnLoad

> **Hook ID:** `greg.persistence.interact.onload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Interact.OnLoad()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLoad(InteractObjectData data)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `data` | `InteractObjectData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnLoad` events in `Interact`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.interact.onload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.interact.onload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.interact.onload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.interact.onload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.interact.onload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.interact.onload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
