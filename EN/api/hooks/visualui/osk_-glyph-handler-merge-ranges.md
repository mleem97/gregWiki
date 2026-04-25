---
title: OSK_GlyphHandler.MergeRanges
description: Hook event for OSK_GlyphHandler.MergeRanges
path: /api/hooks/visualui/osk_-glyph-handler-merge-ranges
---

# OSK_GlyphHandler.MergeRanges

> **Hook ID:** `greg.visualui.osk_glyphhandler.mergeranges`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.MergeRanges()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 MergeRanges(IReadOnlyList`1 a, List`1 b)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `a` | `IReadOnlyList`1` | ... |
| `b` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `MergeRanges` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.mergeranges", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.mergeranges", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.mergeranges")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.mergeranges", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.mergeranges", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.mergeranges", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
