---
title: TMP_TextEventHandler.SendOnSpriteSelection
description: Hook event for TMP_TextEventHandler.SendOnSpriteSelection
path: /api/hooks/visualui/tmp_-text-event-handler-send-on-sprite-selection
---

# TMP_TextEventHandler.SendOnSpriteSelection

> **Hook ID:** `greg.visualui.tmp_texteventhandler.sendonspriteselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_TextEventHandler.SendOnSpriteSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendOnSpriteSelection(Char character, Int32 characterIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `character` | `Char` | ... |
| `characterIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendOnSpriteSelection` events in `TMP_TextEventHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventhandler.sendonspriteselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventhandler.sendonspriteselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventhandler.sendonspriteselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventhandler.sendonspriteselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventhandler.sendonspriteselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventhandler.sendonspriteselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
