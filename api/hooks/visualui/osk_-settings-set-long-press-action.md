---
title: OSK_Settings.SetLongPressAction
description: Hook event for OSK_Settings.SetLongPressAction
path: /api/hooks/visualui/osk_-settings-set-long-press-action
---

# OSK_Settings.SetLongPressAction

> **Hook ID:** `greg.visualui.osk_settings.setlongpressaction`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Settings.SetLongPressAction()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetLongPressAction(UnityAction`1 action)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `action` | `UnityAction`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetLongPressAction` events in `OSK_Settings`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_settings.setlongpressaction", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_settings.setlongpressaction", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_settings.setlongpressaction")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_settings.setlongpressaction", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_settings.setlongpressaction", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_settings.setlongpressaction", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
