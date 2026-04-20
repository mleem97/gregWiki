---
title: CablePositions.CreateTubeMesh
description: Hook event for CablePositions.CreateTubeMesh
path: /api/hooks/networking/cable-positions-create-tube-mesh
---

# CablePositions.CreateTubeMesh

> **Hook ID:** `greg.networking.cablepositions.createtubemesh`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.CreateTubeMesh()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Mesh CreateTubeMesh(List`1 path)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `path` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateTubeMesh` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.createtubemesh", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.createtubemesh", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.createtubemesh")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.createtubemesh", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.createtubemesh", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.createtubemesh", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Mesh`
- **Safe to block?**: Yes
