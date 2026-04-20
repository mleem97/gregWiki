---
title: CablePositions.GetCablePositions
description: Hook event for CablePositions.GetCablePositions
path: /api/hooks/networking/cable-positions-get-cable-positions
---

# CablePositions.GetCablePositions

> **Hook ID:** `greg.networking.cablepositions.getcablepositions`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.GetCablePositions()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 GetCablePositions(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCablePositions` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.getcablepositions", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.getcablepositions", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.getcablepositions")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.getcablepositions", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.getcablepositions", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.getcablepositions", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
