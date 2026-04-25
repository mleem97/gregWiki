---
title: PulsatingText.setColorCallback
description: Hook event for PulsatingText.setColorCallback
path: /api/hooks/visualui/pulsating-text-set-color-callback
---

# PulsatingText.setColorCallback

> **Hook ID:** `greg.visualui.pulsatingtext.setcolorcallback`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PulsatingText.setColorCallback()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void setColorCallback(Color c)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Color` | ... |


## Using this Hook

::: tip
Use this hook to react to `setColorCallback` events in `PulsatingText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pulsatingtext.setcolorcallback", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pulsatingtext.setcolorcallback", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pulsatingtext.setcolorcallback")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pulsatingtext.setcolorcallback", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pulsatingtext.setcolorcallback", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pulsatingtext.setcolorcallback", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
