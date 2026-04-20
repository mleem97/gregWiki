---
title: ButtonExtended.OnPointerExit
description: Hook event for ButtonExtended.OnPointerExit
path: /api/hooks/visualui/button-extended-on-pointer-exit
---

# ButtonExtended.OnPointerExit

> **Hook ID:** `greg.visualui.buttonextended.onpointerexit`
> **Category:** Visualui
> **Namespace:** `UnityEngine.UI`

This hook intercepts calls to `ButtonExtended.OnPointerExit()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnPointerExit(PointerEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `PointerEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnPointerExit` events in `ButtonExtended`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.buttonextended.onpointerexit", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.buttonextended.onpointerexit", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.buttonextended.onpointerexit")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.buttonextended.onpointerexit", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.buttonextended.onpointerexit", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.buttonextended.onpointerexit", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
