---
title: StaticUIElements.InstantiateErrorWarningSign
description: Hook event for StaticUIElements.InstantiateErrorWarningSign
path: /api/hooks/visualui/static-ui-elements-instantiate-error-warning-sign
---

# StaticUIElements.InstantiateErrorWarningSign

> **Hook ID:** `greg.visualui.staticuielements.instantiateerrorwarningsign`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.InstantiateErrorWarningSign()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 InstantiateErrorWarningSign(Boolean isError, Vector3 objectPos)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isError` | `Boolean` | ... |
| `objectPos` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `InstantiateErrorWarningSign` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.instantiateerrorwarningsign", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.instantiateerrorwarningsign", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.instantiateerrorwarningsign")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.instantiateerrorwarningsign", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.instantiateerrorwarningsign", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.instantiateerrorwarningsign", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
