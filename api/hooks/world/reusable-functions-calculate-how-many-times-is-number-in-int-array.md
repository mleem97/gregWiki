---
title: ReusableFunctions.CalculateHowManyTimesIsNumberInIntArray
description: Hook event for ReusableFunctions.CalculateHowManyTimesIsNumberInIntArray
path: /api/hooks/world/reusable-functions-calculate-how-many-times-is-number-in-int-array
---

# ReusableFunctions.CalculateHowManyTimesIsNumberInIntArray

> **Hook ID:** `greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.CalculateHowManyTimesIsNumberInIntArray()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 CalculateHowManyTimesIsNumberInIntArray(Int32 numberToFind, Il2CppStructArray`1 inArray)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `numberToFind` | `Int32` | ... |
| `inArray` | `Il2CppStructArray`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `CalculateHowManyTimesIsNumberInIntArray` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.calculatehowmanytimesisnumberinintarray", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
