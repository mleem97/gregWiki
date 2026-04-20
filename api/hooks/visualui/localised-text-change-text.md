---
title: LocalisedText.ChangeText
description: Hook event for LocalisedText.ChangeText
path: /api/hooks/visualui/localised-text-change-text
---

# LocalisedText.ChangeText

> **Hook ID:** `greg.visualui.localisedtext.changetext`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LocalisedText.ChangeText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ChangeText()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ChangeText` events in `LocalisedText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.localisedtext.changetext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.localisedtext.changetext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.localisedtext.changetext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.localisedtext.changetext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.localisedtext.changetext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.localisedtext.changetext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
