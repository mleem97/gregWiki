---
title: SetIP.ClickButtonCancel
description: Hook event for SetIP.ClickButtonCancel
path: /api/hooks/visualui/set-ip-click-button-cancel
---

# SetIP.ClickButtonCancel

> **Hook ID:** `greg.visualui.setip.clickbuttoncancel`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ClickButtonCancel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClickButtonCancel()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClickButtonCancel` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.setip.clickbuttoncancel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.setip.clickbuttoncancel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.setip.clickbuttoncancel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.setip.clickbuttoncancel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.setip.clickbuttoncancel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.setip.clickbuttoncancel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
