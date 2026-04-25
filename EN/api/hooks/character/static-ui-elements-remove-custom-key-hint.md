---
title: StaticUIElements.RemoveCustomKeyHint
description: Hook event for StaticUIElements.RemoveCustomKeyHint
path: /api/hooks/character/static-ui-elements-remove-custom-key-hint
---

# StaticUIElements.RemoveCustomKeyHint

> **Hook ID:** `greg.character.staticuielements.removecustomkeyhint`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.RemoveCustomKeyHint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveCustomKeyHint()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemoveCustomKeyHint` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.staticuielements.removecustomkeyhint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.staticuielements.removecustomkeyhint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.staticuielements.removecustomkeyhint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.staticuielements.removecustomkeyhint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.staticuielements.removecustomkeyhint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.staticuielements.removecustomkeyhint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
