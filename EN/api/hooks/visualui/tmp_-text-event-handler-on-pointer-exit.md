---
title: TMP_TextEventHandler.OnPointerExit
description: Hook event for TMP_TextEventHandler.OnPointerExit
path: /api/hooks/visualui/tmp_-text-event-handler-on-pointer-exit
---

# TMP_TextEventHandler.OnPointerExit

> **Hook ID:** `greg.visualui.tmp_texteventhandler.onpointerexit`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_TextEventHandler.OnPointerExit()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `OnPointerExit` events in `TMP_TextEventHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventhandler.onpointerexit", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventhandler.onpointerexit", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventhandler.onpointerexit")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventhandler.onpointerexit", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventhandler.onpointerexit", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventhandler.onpointerexit", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
