---
title: OSK_GlyphHandler.GetGlyphEnumSlots
description: Hook event for OSK_GlyphHandler.GetGlyphEnumSlots
path: /api/hooks/visualui/osk_-glyph-handler-get-glyph-enum-slots
---

# OSK_GlyphHandler.GetGlyphEnumSlots

> **Hook ID:** `greg.visualui.osk_glyphhandler.getglyphenumslots`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.GetGlyphEnumSlots()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 GetGlyphEnumSlots()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetGlyphEnumSlots` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.getglyphenumslots", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.getglyphenumslots", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.getglyphenumslots")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.getglyphenumslots", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.getglyphenumslots", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.getglyphenumslots", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
