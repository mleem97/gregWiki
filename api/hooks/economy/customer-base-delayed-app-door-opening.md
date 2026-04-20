---
title: CustomerBase.DelayedAppDoorOpening
description: Hook event for CustomerBase.DelayedAppDoorOpening
path: /api/hooks/economy/customer-base-delayed-app-door-opening
---

# CustomerBase.DelayedAppDoorOpening

> **Hook ID:** `greg.economy.customerbase.delayedappdooropening`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.DelayedAppDoorOpening()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DelayedAppDoorOpening(Int32 appID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `appID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `DelayedAppDoorOpening` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.delayedappdooropening", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.delayedappdooropening", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.delayedappdooropening")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.delayedappdooropening", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.delayedappdooropening", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.delayedappdooropening", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
