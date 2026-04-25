---
title: Rack.InitializeLoadedRack
description: Hook event for Rack.InitializeLoadedRack
path: /api/hooks/persistence/rack-initialize-loaded-rack
---

# Rack.InitializeLoadedRack

> **Hook ID:** `greg.persistence.rack.initializeloadedrack`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Rack.InitializeLoadedRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InitializeLoadedRack(Il2CppStructArray`1 loadedPositions)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `loadedPositions` | `Il2CppStructArray`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `InitializeLoadedRack` events in `Rack`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.rack.initializeloadedrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.rack.initializeloadedrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.rack.initializeloadedrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.rack.initializeloadedrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.rack.initializeloadedrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.rack.initializeloadedrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
