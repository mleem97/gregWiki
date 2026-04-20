---
title: SetIP.ClickButtonNextIP
description: Hook event for SetIP.ClickButtonNextIP
path: /api/hooks/networking/set-ip-click-button-next-ip
---

# SetIP.ClickButtonNextIP

> **Hook ID:** `greg.networking.setip.clickbuttonnextip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ClickButtonNextIP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClickButtonNextIP()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClickButtonNextIP` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.setip.clickbuttonnextip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.setip.clickbuttonnextip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.setip.clickbuttonnextip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.setip.clickbuttonnextip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.setip.clickbuttonnextip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.setip.clickbuttonnextip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
