---
title: OSK_GlyphHandler.Canonicalize
description: Hook event for OSK_GlyphHandler.Canonicalize
path: /api/hooks/visualui/osk_-glyph-handler-canonicalize
---

# OSK_GlyphHandler.Canonicalize

> **Hook ID:** `greg.visualui.osk_glyphhandler.canonicalize`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.Canonicalize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String Canonicalize(String s, Nullable`1 script)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `String` | ... |
| `script` | `Nullable`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `Canonicalize` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.canonicalize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.canonicalize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.canonicalize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.canonicalize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.canonicalize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.canonicalize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
