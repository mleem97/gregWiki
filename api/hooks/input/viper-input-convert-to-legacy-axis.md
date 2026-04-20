---
title: viperInput.ConvertToLegacyAxis
description: Hook event for viperInput.ConvertToLegacyAxis
path: /api/hooks/input/viper-input-convert-to-legacy-axis
---

# viperInput.ConvertToLegacyAxis

> **Hook ID:** `greg.input.viperinput.converttolegacyaxis`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.ConvertToLegacyAxis()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ConvertToLegacyAxis(AXIS_INPUT axis)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `axis` | `AXIS_INPUT` | ... |


## Using this Hook

::: tip
Use this hook to react to `ConvertToLegacyAxis` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.converttolegacyaxis", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.converttolegacyaxis", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.converttolegacyaxis")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.converttolegacyaxis", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.converttolegacyaxis", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.converttolegacyaxis", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
