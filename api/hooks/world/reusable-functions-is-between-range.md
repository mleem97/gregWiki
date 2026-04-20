---
title: ReusableFunctions.IsBetweenRange
description: Hook event for ReusableFunctions.IsBetweenRange
path: /api/hooks/world/reusable-functions-is-between-range
---

# ReusableFunctions.IsBetweenRange

> **Hook ID:** `greg.world.reusablefunctions.isbetweenrange`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.IsBetweenRange()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsBetweenRange(Single thisValue, Single value1, Single value2)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `thisValue` | `Single` | ... |
| `value1` | `Single` | ... |
| `value2` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsBetweenRange` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.isbetweenrange", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.isbetweenrange", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.isbetweenrange")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.isbetweenrange", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.isbetweenrange", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.isbetweenrange", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
