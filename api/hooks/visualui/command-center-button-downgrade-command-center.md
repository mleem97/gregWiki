---
title: CommandCenter.ButtonDowngradeCommandCenter
description: Hook event for CommandCenter.ButtonDowngradeCommandCenter
path: /api/hooks/visualui/command-center-button-downgrade-command-center
---

# CommandCenter.ButtonDowngradeCommandCenter

> **Hook ID:** `greg.visualui.commandcenter.buttondowngradecommandcenter`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.ButtonDowngradeCommandCenter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonDowngradeCommandCenter()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonDowngradeCommandCenter` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.commandcenter.buttondowngradecommandcenter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.commandcenter.buttondowngradecommandcenter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.commandcenter.buttondowngradecommandcenter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.commandcenter.buttondowngradecommandcenter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.commandcenter.buttondowngradecommandcenter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.commandcenter.buttondowngradecommandcenter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
