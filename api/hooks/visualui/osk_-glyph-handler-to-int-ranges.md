---
title: OSK_GlyphHandler.ToIntRanges
description: Hook event for OSK_GlyphHandler.ToIntRanges
path: /api/hooks/visualui/osk_-glyph-handler-to-int-ranges
---

# OSK_GlyphHandler.ToIntRanges

> **Hook ID:** `greg.visualui.osk_glyphhandler.tointranges`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.ToIntRanges()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 ToIntRanges(List`1 hexRanges)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `hexRanges` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `ToIntRanges` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.tointranges", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.tointranges", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.tointranges")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.tointranges", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.tointranges", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.tointranges", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
