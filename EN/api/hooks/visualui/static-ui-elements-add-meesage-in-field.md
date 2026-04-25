---
title: StaticUIElements.AddMeesageInField
description: Hook event for StaticUIElements.AddMeesageInField
path: /api/hooks/visualui/static-ui-elements-add-meesage-in-field
---

# StaticUIElements.AddMeesageInField

> **Hook ID:** `greg.visualui.staticuielements.addmeesageinfield`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.AddMeesageInField()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddMeesageInField(String message)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `message` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddMeesageInField` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.addmeesageinfield", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.addmeesageinfield", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.addmeesageinfield")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.addmeesageinfield", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.addmeesageinfield", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.addmeesageinfield", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
