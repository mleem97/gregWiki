---
title: OSK_GlyphHandler.TryParseHex
description: Hook event for OSK_GlyphHandler.TryParseHex
path: /api/hooks/visualui/osk_-glyph-handler-try-parse-hex
---

# OSK_GlyphHandler.TryParseHex

> **Hook ID:** `greg.visualui.osk_glyphhandler.tryparsehex`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.TryParseHex()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean TryParseHex(String hex, Int32& value)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hex` | `String` | ... |
| `value` | `Int32&` | ... |


## Using this Hook

::: tip
Use this hook to react to `TryParseHex` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.tryparsehex", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.tryparsehex", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.tryparsehex")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.tryparsehex", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.tryparsehex", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.tryparsehex", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
