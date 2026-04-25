---
title: Rack.SetDisablePositionsButtonMaterial
description: Hook event for Rack.SetDisablePositionsButtonMaterial
path: /api/hooks/visualui/rack-set-disable-positions-button-material
---

# Rack.SetDisablePositionsButtonMaterial

> **Hook ID:** `greg.visualui.rack.setdisablepositionsbuttonmaterial`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Rack.SetDisablePositionsButtonMaterial()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetDisablePositionsButtonMaterial(Material material)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `material` | `Material` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetDisablePositionsButtonMaterial` events in `Rack`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rack.setdisablepositionsbuttonmaterial", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rack.setdisablepositionsbuttonmaterial", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rack.setdisablepositionsbuttonmaterial")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rack.setdisablepositionsbuttonmaterial", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rack.setdisablepositionsbuttonmaterial", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rack.setdisablepositionsbuttonmaterial", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
