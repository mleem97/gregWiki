---
title: StaticUIElements.UpdateCoinsAndPrestige_TopLeft
description: Hook event for StaticUIElements.UpdateCoinsAndPrestige_TopLeft
path: /api/hooks/economy/static-ui-elements-update-coins-and-prestige_-top-left
---

# StaticUIElements.UpdateCoinsAndPrestige_TopLeft

> **Hook ID:** `greg.economy.staticuielements.updatecoinsandprestige_topleft`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.UpdateCoinsAndPrestige_TopLeft()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator UpdateCoinsAndPrestige_TopLeft()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateCoinsAndPrestige_TopLeft` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.staticuielements.updatecoinsandprestige_topleft", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.staticuielements.updatecoinsandprestige_topleft", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.staticuielements.updatecoinsandprestige_topleft")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.staticuielements.updatecoinsandprestige_topleft", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.staticuielements.updatecoinsandprestige_topleft", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.staticuielements.updatecoinsandprestige_topleft", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
