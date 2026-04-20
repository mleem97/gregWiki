---
title: SetIP.ShowCanvas
description: Hook event for SetIP.ShowCanvas
path: /api/hooks/hardware/set-ip-show-canvas
---

# SetIP.ShowCanvas

> **Hook ID:** `greg.hardware.setip.showcanvas`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ShowCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowCanvas(Server _server)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_server` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowCanvas` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.setip.showcanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.setip.showcanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.setip.showcanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.setip.showcanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.setip.showcanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.setip.showcanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
