---
title: TMP_TextEventCheck.OnSpriteSelection
description: Hook event for TMP_TextEventCheck.OnSpriteSelection
path: /api/hooks/visualui/tmp_-text-event-check-on-sprite-selection
---

# TMP_TextEventCheck.OnSpriteSelection

> **Hook ID:** `greg.visualui.tmp_texteventcheck.onspriteselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_TextEventCheck.OnSpriteSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnSpriteSelection(Char c, Int32 index)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Char` | ... |
| `index` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnSpriteSelection` events in `TMP_TextEventCheck`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventcheck.onspriteselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventcheck.onspriteselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventcheck.onspriteselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventcheck.onspriteselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventcheck.onspriteselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventcheck.onspriteselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
