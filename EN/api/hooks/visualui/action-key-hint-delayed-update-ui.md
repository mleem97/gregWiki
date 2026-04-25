---
title: ActionKeyHint.DelayedUpdateUI
description: Hook event for ActionKeyHint.DelayedUpdateUI
path: /api/hooks/visualui/action-key-hint-delayed-update-ui
---

# ActionKeyHint.DelayedUpdateUI

> **Hook ID:** `greg.visualui.actionkeyhint.delayedupdateui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ActionKeyHint.DelayedUpdateUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DelayedUpdateUI()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DelayedUpdateUI` events in `ActionKeyHint`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.actionkeyhint.delayedupdateui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.actionkeyhint.delayedupdateui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.actionkeyhint.delayedupdateui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.actionkeyhint.delayedupdateui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.actionkeyhint.delayedupdateui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.actionkeyhint.delayedupdateui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
