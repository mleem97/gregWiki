---
title: ReusableFunctions.SplitCsvLine
description: Hook event for ReusableFunctions.SplitCsvLine
path: /api/hooks/world/reusable-functions-split-csv-line
---

# ReusableFunctions.SplitCsvLine

> **Hook ID:** `greg.world.reusablefunctions.splitcsvline`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.SplitCsvLine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStringArray SplitCsvLine(String line)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `line` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `SplitCsvLine` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.reusablefunctions.splitcsvline", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.reusablefunctions.splitcsvline", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.reusablefunctions.splitcsvline")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.reusablefunctions.splitcsvline", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.reusablefunctions.splitcsvline", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.reusablefunctions.splitcsvline", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStringArray`
- **Safe to block?**: Yes
