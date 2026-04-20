---
title: StaticUIElements.CreateCustomKeyHint
description: Hook event for StaticUIElements.CreateCustomKeyHint
path: /api/hooks/input/static-ui-elements-create-custom-key-hint
---

# StaticUIElements.CreateCustomKeyHint

> **Hook ID:** `greg.input.staticuielements.createcustomkeyhint`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.CreateCustomKeyHint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject CreateCustomKeyHint(InputAction action, Int32 textUID, Transform parent, Boolean isPermanent)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `InputAction` | ... |
| `textUID` | `Int32` | ... |
| `parent` | `Transform` | ... |
| `isPermanent` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateCustomKeyHint` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.staticuielements.createcustomkeyhint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.staticuielements.createcustomkeyhint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.staticuielements.createcustomkeyhint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.staticuielements.createcustomkeyhint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.staticuielements.createcustomkeyhint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.staticuielements.createcustomkeyhint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
