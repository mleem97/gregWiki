---
title: ReusableFunctions.CalculatePercentage
description: Hook event for ReusableFunctions.CalculatePercentage
path: /api/hooks/world/reusable-functions-calculate-percentage
---

# ReusableFunctions.CalculatePercentage

> **Hook ID:** `greg.world.reusablefunctions.calculatepercentage`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.CalculatePercentage()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Double CalculatePercentage(Int32 total, Int32 number)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `total` | `Int32` | ... |
| `number` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CalculatePercentage` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.calculatepercentage", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.calculatepercentage", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.calculatepercentage")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.calculatepercentage", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.calculatepercentage", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.calculatepercentage", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Double`
- **Safe to block?**: Yes
