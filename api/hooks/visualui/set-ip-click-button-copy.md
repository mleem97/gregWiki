---
title: SetIP.ClickButtonCopy
description: Hook event for SetIP.ClickButtonCopy
path: /api/hooks/visualui/set-ip-click-button-copy
---

# SetIP.ClickButtonCopy

> **Hook ID:** `greg.visualui.setip.clickbuttoncopy`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ClickButtonCopy()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClickButtonCopy()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClickButtonCopy` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.setip.clickbuttoncopy", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.setip.clickbuttoncopy", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.setip.clickbuttoncopy")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.setip.clickbuttoncopy", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.setip.clickbuttoncopy", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.setip.clickbuttoncopy", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
