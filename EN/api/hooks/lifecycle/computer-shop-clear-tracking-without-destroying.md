---
title: ComputerShop.ClearTrackingWithoutDestroying
description: Hook event for ComputerShop.ClearTrackingWithoutDestroying
path: /api/hooks/lifecycle/computer-shop-clear-tracking-without-destroying
---

# ComputerShop.ClearTrackingWithoutDestroying

> **Hook ID:** `greg.lifecycle.computershop.cleartrackingwithoutdestroying`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ClearTrackingWithoutDestroying()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClearTrackingWithoutDestroying()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClearTrackingWithoutDestroying` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.computershop.cleartrackingwithoutdestroying", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.computershop.cleartrackingwithoutdestroying", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.computershop.cleartrackingwithoutdestroying")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.computershop.cleartrackingwithoutdestroying", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.computershop.cleartrackingwithoutdestroying", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.computershop.cleartrackingwithoutdestroying", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
