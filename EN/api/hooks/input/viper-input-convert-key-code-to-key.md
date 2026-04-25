---
title: viperInput.ConvertKeyCodeToKey
description: Hook event for viperInput.ConvertKeyCodeToKey
path: /api/hooks/input/viper-input-convert-key-code-to-key
---

# viperInput.ConvertKeyCodeToKey

> **Hook ID:** `greg.input.viperinput.convertkeycodetokey`
> **Category:** Input
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.ConvertKeyCodeToKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Key ConvertKeyCodeToKey(KeyCode k)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `k` | `KeyCode` | ... |


## Using this Hook

::: tip
Use this hook to react to `ConvertKeyCodeToKey` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.viperinput.convertkeycodetokey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.viperinput.convertkeycodetokey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.viperinput.convertkeycodetokey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.viperinput.convertkeycodetokey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.viperinput.convertkeycodetokey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.viperinput.convertkeycodetokey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Key`
- **Safe to block?**: Yes
