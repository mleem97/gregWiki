---
title: viperInput.RegisterKeyStrokeCallback
description: Hook event for viperInput.RegisterKeyStrokeCallback
path: /api/hooks/input/viper-input-register-key-stroke-callback
---

# viperInput.RegisterKeyStrokeCallback

> **Hook ID:** `greg.input.viperinput.registerkeystrokecallback`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.RegisterKeyStrokeCallback()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterKeyStrokeCallback(Action`1 action, Boolean enable)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `Action`1` | ... |
| `enable` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterKeyStrokeCallback` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.registerkeystrokecallback", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.registerkeystrokecallback", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.registerkeystrokecallback")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.registerkeystrokecallback", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.registerkeystrokecallback", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.registerkeystrokecallback", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
