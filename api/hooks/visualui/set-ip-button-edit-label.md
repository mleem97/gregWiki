---
title: SetIP.ButtonEditLabel
description: Hook event for SetIP.ButtonEditLabel
path: /api/hooks/visualui/set-ip-button-edit-label
---

# SetIP.ButtonEditLabel

> **Hook ID:** `greg.visualui.setip.buttoneditlabel`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ButtonEditLabel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ButtonEditLabel()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ButtonEditLabel` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.setip.buttoneditlabel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.setip.buttoneditlabel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.setip.buttoneditlabel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.setip.buttoneditlabel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.setip.buttoneditlabel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.setip.buttoneditlabel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
