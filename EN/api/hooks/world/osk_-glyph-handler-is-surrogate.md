---
title: OSK_GlyphHandler.IsSurrogate
description: Hook event for OSK_GlyphHandler.IsSurrogate
path: /api/hooks/world/osk_-glyph-handler-is-surrogate
---

# OSK_GlyphHandler.IsSurrogate

> **Hook ID:** `greg.world.osk_glyphhandler.issurrogate`
> **Category:** World
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.IsSurrogate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsSurrogate(Int32 cp)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cp` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsSurrogate` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.osk_glyphhandler.issurrogate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.osk_glyphhandler.issurrogate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.osk_glyphhandler.issurrogate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.osk_glyphhandler.issurrogate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.osk_glyphhandler.issurrogate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.osk_glyphhandler.issurrogate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
