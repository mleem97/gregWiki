---
title: TMP_TextEventHandler.SendOnLineSelection
description: Hook event for TMP_TextEventHandler.SendOnLineSelection
path: /api/hooks/visualui/tmp_-text-event-handler-send-on-line-selection
---

# TMP_TextEventHandler.SendOnLineSelection

> **Hook ID:** `greg.visualui.tmp_texteventhandler.sendonlineselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_TextEventHandler.SendOnLineSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendOnLineSelection(String line, Int32 charIndex, Int32 length)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `line` | `String` | ... |
| `charIndex` | `Int32` | ... |
| `length` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendOnLineSelection` events in `TMP_TextEventHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventhandler.sendonlineselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventhandler.sendonlineselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventhandler.sendonlineselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventhandler.sendonlineselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventhandler.sendonlineselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventhandler.sendonlineselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
