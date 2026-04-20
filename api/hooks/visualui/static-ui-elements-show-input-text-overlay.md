---
title: StaticUIElements.ShowInputTextOverlay
description: Hook event for StaticUIElements.ShowInputTextOverlay
path: /api/hooks/visualui/static-ui-elements-show-input-text-overlay
---

# StaticUIElements.ShowInputTextOverlay

> **Hook ID:** `greg.visualui.staticuielements.showinputtextoverlay`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.ShowInputTextOverlay()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowInputTextOverlay(String title, Action`1 onConfirmed, String defaultText, Boolean isOpenedFromWorld, GameObject selectOnClose)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `title` | `String` | ... |
| `onConfirmed` | `Action`1` | ... |
| `defaultText` | `String` | ... |
| `isOpenedFromWorld` | `Boolean` | ... |
| `selectOnClose` | `GameObject` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowInputTextOverlay` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.showinputtextoverlay", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.showinputtextoverlay", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.showinputtextoverlay")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.showinputtextoverlay", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.showinputtextoverlay", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.showinputtextoverlay", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
