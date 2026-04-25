---
title: OSK_GlyphHandler.TryParseGlyphSuffix
description: Hook event for OSK_GlyphHandler.TryParseGlyphSuffix
path: /api/hooks/visualui/osk_-glyph-handler-try-parse-glyph-suffix
---

# OSK_GlyphHandler.TryParseGlyphSuffix

> **Hook ID:** `greg.visualui.osk_glyphhandler.tryparseglyphsuffix`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.TryParseGlyphSuffix()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean TryParseGlyphSuffix(String name, Int32& n)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `name` | `String` | ... |
| `n` | `Int32&` | ... |


## Using this Hook

::: tip
Use this hook to react to `TryParseGlyphSuffix` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.tryparseglyphsuffix", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.tryparseglyphsuffix", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.tryparseglyphsuffix")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.tryparseglyphsuffix", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.tryparseglyphsuffix", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.tryparseglyphsuffix", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
