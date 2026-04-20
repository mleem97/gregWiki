---
title: CustomerBase.CheckIfAppRequirementsAreMet
description: Hook event for CustomerBase.CheckIfAppRequirementsAreMet
path: /api/hooks/economy/customer-base-check-if-app-requirements-are-met
---

# CustomerBase.CheckIfAppRequirementsAreMet

> **Hook ID:** `greg.economy.customerbase.checkifapprequirementsaremet`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.CheckIfAppRequirementsAreMet()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator CheckIfAppRequirementsAreMet()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CheckIfAppRequirementsAreMet` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.customerbase.checkifapprequirementsaremet", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.customerbase.checkifapprequirementsaremet", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.customerbase.checkifapprequirementsaremet")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.customerbase.checkifapprequirementsaremet", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.customerbase.checkifapprequirementsaremet", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.customerbase.checkifapprequirementsaremet", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
