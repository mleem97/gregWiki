---
title: VerticalRecyclingSystem.OnValueChangedListener
description: Hook event for VerticalRecyclingSystem.OnValueChangedListener
path: /api/hooks/visualui/vertical-recycling-system-on-value-changed-listener
---

# VerticalRecyclingSystem.OnValueChangedListener

> **Hook ID:** `greg.visualui.verticalrecyclingsystem.onvaluechangedlistener`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `VerticalRecyclingSystem.OnValueChangedListener()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 OnValueChangedListener(Vector2 direction)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `direction` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnValueChangedListener` events in `VerticalRecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.verticalrecyclingsystem.onvaluechangedlistener", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
