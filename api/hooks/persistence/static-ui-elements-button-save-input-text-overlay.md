---
title: StaticUIElements.ButtonSaveInputTextOverlay
description: Hook event for StaticUIElements.ButtonSaveInputTextOverlay
path: /api/hooks/persistence/static-ui-elements-button-save-input-text-overlay
---

# StaticUIElements.ButtonSaveInputTextOverlay

> **Hook ID:** `greg.persistence.staticuielements.buttonsaveinputtextoverlay`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.ButtonSaveInputTextOverlay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonSaveInputTextOverlay()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonSaveInputTextOverlay` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.staticuielements.buttonsaveinputtextoverlay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.staticuielements.buttonsaveinputtextoverlay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.staticuielements.buttonsaveinputtextoverlay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.staticuielements.buttonsaveinputtextoverlay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.staticuielements.buttonsaveinputtextoverlay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.staticuielements.buttonsaveinputtextoverlay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
