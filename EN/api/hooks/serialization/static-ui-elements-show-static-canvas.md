---
title: StaticUIElements.ShowStaticCanvas
description: Hook event for StaticUIElements.ShowStaticCanvas
path: /api/hooks/serialization/static-ui-elements-show-static-canvas
---

# StaticUIElements.ShowStaticCanvas

> **Hook ID:** `greg.serialization.staticuielements.showstaticcanvas`
> **Category:** Serialization
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.ShowStaticCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowStaticCanvas(Boolean active)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `active` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowStaticCanvas` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.staticuielements.showstaticcanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.staticuielements.showstaticcanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.staticuielements.showstaticcanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.staticuielements.showstaticcanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.staticuielements.showstaticcanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.staticuielements.showstaticcanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
