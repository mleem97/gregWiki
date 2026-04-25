---
title: ReusableFunctions.DisableGameObjectWithDelay
description: Hook event for ReusableFunctions.DisableGameObjectWithDelay
path: /api/hooks/world/reusable-functions-disable-game-object-with-delay
---

# ReusableFunctions.DisableGameObjectWithDelay

> **Hook ID:** `greg.world.reusablefunctions.disablegameobjectwithdelay`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.DisableGameObjectWithDelay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DisableGameObjectWithDelay(GameObject go, Single time)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `go` | `GameObject` | ... |
| `time` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `DisableGameObjectWithDelay` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.disablegameobjectwithdelay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.disablegameobjectwithdelay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.disablegameobjectwithdelay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.disablegameobjectwithdelay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.disablegameobjectwithdelay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.disablegameobjectwithdelay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
