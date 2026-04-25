---
title: TextMeshProFloatingText.DisplayTextMeshFloatingText
description: Hook event for TextMeshProFloatingText.DisplayTextMeshFloatingText
path: /api/hooks/visualui/text-mesh-pro-floating-text-display-text-mesh-floating-text
---

# TextMeshProFloatingText.DisplayTextMeshFloatingText

> **Hook ID:** `greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextMeshProFloatingText.DisplayTextMeshFloatingText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DisplayTextMeshFloatingText()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DisplayTextMeshFloatingText` events in `TextMeshProFloatingText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshfloatingtext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
