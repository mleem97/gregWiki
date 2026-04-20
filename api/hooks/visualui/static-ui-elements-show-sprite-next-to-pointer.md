---
title: StaticUIElements.ShowSpriteNextToPointer
description: Hook event for StaticUIElements.ShowSpriteNextToPointer
path: /api/hooks/visualui/static-ui-elements-show-sprite-next-to-pointer
---

# StaticUIElements.ShowSpriteNextToPointer

> **Hook ID:** `greg.visualui.staticuielements.showspritenexttopointer`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.ShowSpriteNextToPointer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowSpriteNextToPointer(Sprite _sprite)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_sprite` | `Sprite` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowSpriteNextToPointer` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.showspritenexttopointer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.showspritenexttopointer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.showspritenexttopointer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.showspritenexttopointer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.showspritenexttopointer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.showspritenexttopointer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
