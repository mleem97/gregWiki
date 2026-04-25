---
title: ReusableFunctions.ShuffledArrayOfInts
description: Hook event for ReusableFunctions.ShuffledArrayOfInts
path: /api/hooks/world/reusable-functions-shuffled-array-of-ints
---

# ReusableFunctions.ShuffledArrayOfInts

> **Hook ID:** `greg.world.reusablefunctions.shuffledarrayofints`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.ShuffledArrayOfInts()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStructArray`1 ShuffledArrayOfInts(Int32 arrayLenght)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `arrayLenght` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShuffledArrayOfInts` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.shuffledarrayofints", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.shuffledarrayofints", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.shuffledarrayofints")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.shuffledarrayofints", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.shuffledarrayofints", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.shuffledarrayofints", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStructArray`1`
- **Safe to block?**: Yes
