---
title: TrolleyTrigger.OnTriggerEnter
description: Hook event for TrolleyTrigger.OnTriggerEnter
path: /api/hooks/world/trolley-trigger-on-trigger-enter
---

# TrolleyTrigger.OnTriggerEnter

> **Hook ID:** `greg.world.trolleytrigger.ontriggerenter`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TrolleyTrigger.OnTriggerEnter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnTriggerEnter(Collider other)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `other` | `Collider` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnTriggerEnter` events in `TrolleyTrigger`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.trolleytrigger.ontriggerenter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.trolleytrigger.ontriggerenter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.trolleytrigger.ontriggerenter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.trolleytrigger.ontriggerenter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.trolleytrigger.ontriggerenter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.trolleytrigger.ontriggerenter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
