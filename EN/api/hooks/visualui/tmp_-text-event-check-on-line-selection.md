---
title: TMP_TextEventCheck.OnLineSelection
description: Hook event for TMP_TextEventCheck.OnLineSelection
path: /api/hooks/visualui/tmp_-text-event-check-on-line-selection
---

# TMP_TextEventCheck.OnLineSelection

> **Hook ID:** `greg.visualui.tmp_texteventcheck.onlineselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_TextEventCheck.OnLineSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLineSelection(String lineText, Int32 firstCharacterIndex, Int32 length)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `lineText` | `String` | ... |
| `firstCharacterIndex` | `Int32` | ... |
| `length` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnLineSelection` events in `TMP_TextEventCheck`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventcheck.onlineselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventcheck.onlineselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventcheck.onlineselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventcheck.onlineselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventcheck.onlineselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventcheck.onlineselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
