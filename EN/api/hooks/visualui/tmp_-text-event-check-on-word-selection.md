---
title: TMP_TextEventCheck.OnWordSelection
description: Hook event for TMP_TextEventCheck.OnWordSelection
path: /api/hooks/visualui/tmp_-text-event-check-on-word-selection
---

# TMP_TextEventCheck.OnWordSelection

> **Hook ID:** `greg.visualui.tmp_texteventcheck.onwordselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_TextEventCheck.OnWordSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnWordSelection(String word, Int32 firstCharacterIndex, Int32 length)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `word` | `String` | ... |
| `firstCharacterIndex` | `Int32` | ... |
| `length` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnWordSelection` events in `TMP_TextEventCheck`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventcheck.onwordselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventcheck.onwordselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventcheck.onwordselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventcheck.onwordselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventcheck.onwordselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventcheck.onwordselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
