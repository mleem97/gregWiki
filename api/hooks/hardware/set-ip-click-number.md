---
title: SetIP.ClickNumber
description: Hook event for SetIP.ClickNumber
path: /api/hooks/hardware/set-ip-click-number
---

# SetIP.ClickNumber

> **Hook ID:** `greg.hardware.setip.clicknumber`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.ClickNumber()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClickNumber(String number)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `number` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ClickNumber` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.setip.clicknumber", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.setip.clicknumber", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.setip.clicknumber")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.setip.clicknumber", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.setip.clicknumber", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.setip.clicknumber", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
