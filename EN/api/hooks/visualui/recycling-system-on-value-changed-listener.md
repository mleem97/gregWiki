---
title: RecyclingSystem.OnValueChangedListener
description: Hook event for RecyclingSystem.OnValueChangedListener
path: /api/hooks/visualui/recycling-system-on-value-changed-listener
---

# RecyclingSystem.OnValueChangedListener

> **Hook ID:** `greg.visualui.recyclingsystem.onvaluechangedlistener`
> **Category:** Visualui
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclingSystem.OnValueChangedListener()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `OnValueChangedListener` events in `RecyclingSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.recyclingsystem.onvaluechangedlistener", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.recyclingsystem.onvaluechangedlistener", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.recyclingsystem.onvaluechangedlistener")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.recyclingsystem.onvaluechangedlistener", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.recyclingsystem.onvaluechangedlistener", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.recyclingsystem.onvaluechangedlistener", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
