---
title: Rack.ButtonUnmountRack
description: Hook event for Rack.ButtonUnmountRack
path: /api/hooks/visualui/rack-button-unmount-rack
---

# Rack.ButtonUnmountRack

> **Hook ID:** `greg.visualui.rack.buttonunmountrack`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Rack.ButtonUnmountRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonUnmountRack()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonUnmountRack` events in `Rack`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.rack.buttonunmountrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.rack.buttonunmountrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.rack.buttonunmountrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.rack.buttonunmountrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.rack.buttonunmountrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.rack.buttonunmountrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
