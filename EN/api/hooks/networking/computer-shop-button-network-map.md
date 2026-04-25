---
title: ComputerShop.ButtonNetworkMap
description: Hook event for ComputerShop.ButtonNetworkMap
path: /api/hooks/networking/computer-shop-button-network-map
---

# ComputerShop.ButtonNetworkMap

> **Hook ID:** `greg.networking.computershop.buttonnetworkmap`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ComputerShop.ButtonNetworkMap()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonNetworkMap()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonNetworkMap` events in `ComputerShop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.computershop.buttonnetworkmap", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.computershop.buttonnetworkmap", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.computershop.buttonnetworkmap")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.computershop.buttonnetworkmap", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.computershop.buttonnetworkmap", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.computershop.buttonnetworkmap", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
