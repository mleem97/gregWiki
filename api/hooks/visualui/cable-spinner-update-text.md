---
title: CableSpinner.UpdateText
description: Hook event for CableSpinner.UpdateText
path: /api/hooks/visualui/cable-spinner-update-text
---

# CableSpinner.UpdateText

> **Hook ID:** `greg.visualui.cablespinner.updatetext`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.UpdateText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateText()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateText` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.cablespinner.updatetext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.cablespinner.updatetext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.cablespinner.updatetext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.cablespinner.updatetext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.cablespinner.updatetext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.cablespinner.updatetext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
