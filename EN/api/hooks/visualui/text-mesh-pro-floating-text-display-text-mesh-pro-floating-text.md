---
title: TextMeshProFloatingText.DisplayTextMeshProFloatingText
description: Hook event for TextMeshProFloatingText.DisplayTextMeshProFloatingText
path: /api/hooks/visualui/text-mesh-pro-floating-text-display-text-mesh-pro-floating-text
---

# TextMeshProFloatingText.DisplayTextMeshProFloatingText

> **Hook ID:** `greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TextMeshProFloatingText.DisplayTextMeshProFloatingText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DisplayTextMeshProFloatingText()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DisplayTextMeshProFloatingText` events in `TextMeshProFloatingText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.textmeshprofloatingtext.displaytextmeshprofloatingtext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
