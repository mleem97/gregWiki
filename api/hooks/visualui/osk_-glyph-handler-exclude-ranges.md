---
title: OSK_GlyphHandler.ExcludeRanges
description: Hook event for OSK_GlyphHandler.ExcludeRanges
path: /api/hooks/visualui/osk_-glyph-handler-exclude-ranges
---

# OSK_GlyphHandler.ExcludeRanges

> **Hook ID:** `greg.visualui.osk_glyphhandler.excluderanges`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.ExcludeRanges()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 ExcludeRanges(List`1 source, List`1 excludes)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `source` | `List`1` | ... |
| `excludes` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `ExcludeRanges` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.excluderanges", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.excluderanges", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.excluderanges")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.excluderanges", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.excluderanges", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.excluderanges", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
