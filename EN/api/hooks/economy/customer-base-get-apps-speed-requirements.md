---
title: CustomerBase.GetAppsSpeedRequirements
description: Hook event for CustomerBase.GetAppsSpeedRequirements
path: /api/hooks/economy/customer-base-get-apps-speed-requirements
---

# CustomerBase.GetAppsSpeedRequirements

> **Hook ID:** `greg.economy.customerbase.getappsspeedrequirements`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.GetAppsSpeedRequirements()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStructArray`1 GetAppsSpeedRequirements()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetAppsSpeedRequirements` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.getappsspeedrequirements", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.getappsspeedrequirements", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.getappsspeedrequirements")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.getappsspeedrequirements", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.getappsspeedrequirements", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.getappsspeedrequirements", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStructArray`1`
- **Safe to block?**: Yes
