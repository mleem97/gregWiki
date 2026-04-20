---
title: TMP_TextEventHandler.SendOnWordSelection
description: Hook event for TMP_TextEventHandler.SendOnWordSelection
path: /api/hooks/visualui/tmp_-text-event-handler-send-on-word-selection
---

# TMP_TextEventHandler.SendOnWordSelection

> **Hook ID:** `greg.visualui.tmp_texteventhandler.sendonwordselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_TextEventHandler.SendOnWordSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendOnWordSelection(String word, Int32 charIndex, Int32 length)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `word` | `String` | ... |
| `charIndex` | `Int32` | ... |
| `length` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendOnWordSelection` events in `TMP_TextEventHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventhandler.sendonwordselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventhandler.sendonwordselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventhandler.sendonwordselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventhandler.sendonwordselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventhandler.sendonwordselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventhandler.sendonwordselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
