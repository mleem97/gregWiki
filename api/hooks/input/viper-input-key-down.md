---
title: viperInput.KeyDown
description: Hook event for viperInput.KeyDown
path: /api/hooks/input/viper-input-key-down
---

# viperInput.KeyDown

> **Hook ID:** `greg.input.viperinput.keydown`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.KeyDown()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean KeyDown(KeyCode k)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `KeyCode` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyDown` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.keydown", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.keydown", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.keydown")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.keydown", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.keydown", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.keydown", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
