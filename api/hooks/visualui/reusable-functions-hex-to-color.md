---
title: ReusableFunctions.HexToColor
description: Hook event for ReusableFunctions.HexToColor
path: /api/hooks/visualui/reusable-functions-hex-to-color
---

# ReusableFunctions.HexToColor

> **Hook ID:** `greg.visualui.reusablefunctions.hextocolor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.HexToColor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Color HexToColor(String hex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hex` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `HexToColor` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.reusablefunctions.hextocolor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.reusablefunctions.hextocolor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.reusablefunctions.hextocolor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.reusablefunctions.hextocolor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.reusablefunctions.hextocolor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.reusablefunctions.hextocolor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Color`
- **Safe to block?**: Yes
