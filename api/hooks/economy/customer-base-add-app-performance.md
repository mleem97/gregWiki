---
title: CustomerBase.AddAppPerformance
description: Hook event for CustomerBase.AddAppPerformance
path: /api/hooks/economy/customer-base-add-app-performance
---

# CustomerBase.AddAppPerformance

> **Hook ID:** `greg.economy.customerbase.addappperformance`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.AddAppPerformance()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddAppPerformance(Int32 appID, Single speed)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `appID` | `Int32` | ... |
| `speed` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddAppPerformance` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.addappperformance", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.addappperformance", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.addappperformance")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.addappperformance", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.addappperformance", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.addappperformance", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
