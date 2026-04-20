---
title: TMP_TextEventHandler.SendOnLinkSelection
description: Hook event for TMP_TextEventHandler.SendOnLinkSelection
path: /api/hooks/visualui/tmp_-text-event-handler-send-on-link-selection
---

# TMP_TextEventHandler.SendOnLinkSelection

> **Hook ID:** `greg.visualui.tmp_texteventhandler.sendonlinkselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_TextEventHandler.SendOnLinkSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendOnLinkSelection(String linkID, String linkText, Int32 linkIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `linkID` | `String` | ... |
| `linkText` | `String` | ... |
| `linkIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendOnLinkSelection` events in `TMP_TextEventHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventhandler.sendonlinkselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventhandler.sendonlinkselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventhandler.sendonlinkselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventhandler.sendonlinkselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventhandler.sendonlinkselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventhandler.sendonlinkselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
