---
title: viperInput.AnyPhysicalKey
description: Hook event for viperInput.AnyPhysicalKey
path: /api/hooks/input/viper-input-any-physical-key
---

# viperInput.AnyPhysicalKey

> **Hook ID:** `greg.input.viperinput.anyphysicalkey`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.AnyPhysicalKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean AnyPhysicalKey()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AnyPhysicalKey` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.anyphysicalkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.anyphysicalkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.anyphysicalkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.anyphysicalkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.anyphysicalkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.anyphysicalkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
