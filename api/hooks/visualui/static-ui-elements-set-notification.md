---
title: StaticUIElements.SetNotification
description: Hook event for StaticUIElements.SetNotification
path: /api/hooks/visualui/static-ui-elements-set-notification
---

# StaticUIElements.SetNotification

> **Hook ID:** `greg.visualui.staticuielements.setnotification`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.SetNotification()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetNotification(Int32 _localisationUID, Sprite _sprite, String _text)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_localisationUID` | `Int32` | ... |
| `_sprite` | `Sprite` | ... |
| `_text` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetNotification` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.setnotification", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.setnotification", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.setnotification")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.setnotification", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.setnotification", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.setnotification", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
