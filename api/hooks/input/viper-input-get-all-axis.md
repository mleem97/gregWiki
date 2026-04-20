---
title: viperInput.GetAllAxis
description: Hook event for viperInput.GetAllAxis
path: /api/hooks/input/viper-input-get-all-axis
---

# viperInput.GetAllAxis

> **Hook ID:** `greg.input.viperinput.getallaxis`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetAllAxis()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single GetAllAxis()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetAllAxis` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.getallaxis", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.getallaxis", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.getallaxis")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.getallaxis", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.getallaxis", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.getallaxis", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
