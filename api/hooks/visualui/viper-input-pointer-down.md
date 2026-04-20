---
title: viperInput.PointerDown
description: Hook event for viperInput.PointerDown
path: /api/hooks/visualui/viper-input-pointer-down
---

# viperInput.PointerDown

> **Hook ID:** `greg.visualui.viperinput.pointerdown`
> **Category:** Visualui
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.PointerDown()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean PointerDown(Int32 mouseBtn)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `mouseBtn` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `PointerDown` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.viperinput.pointerdown", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.viperinput.pointerdown", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.viperinput.pointerdown")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.viperinput.pointerdown", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.viperinput.pointerdown", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.viperinput.pointerdown", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
