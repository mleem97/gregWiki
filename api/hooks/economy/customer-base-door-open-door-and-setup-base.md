---
title: CustomerBaseDoor.OpenDoorAndSetupBase
description: Hook event for CustomerBaseDoor.OpenDoorAndSetupBase
path: /api/hooks/economy/customer-base-door-open-door-and-setup-base
---

# CustomerBaseDoor.OpenDoorAndSetupBase

> **Hook ID:** `greg.economy.customerbasedoor.opendoorandsetupbase`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBaseDoor.OpenDoorAndSetupBase()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OpenDoorAndSetupBase(CustomerItem customerItem)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerItem` | `CustomerItem` | ... |


## Using this Hook

::: tip
Use this hook to react to `OpenDoorAndSetupBase` events in `CustomerBaseDoor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbasedoor.opendoorandsetupbase", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbasedoor.opendoorandsetupbase", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbasedoor.opendoorandsetupbase")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbasedoor.opendoorandsetupbase", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbasedoor.opendoorandsetupbase", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbasedoor.opendoorandsetupbase", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
