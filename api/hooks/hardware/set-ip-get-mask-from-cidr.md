---
title: SetIP.GetMaskFromCidr
description: Hook event for SetIP.GetMaskFromCidr
path: /api/hooks/hardware/set-ip-get-mask-from-cidr
---

# SetIP.GetMaskFromCidr

> **Hook ID:** `greg.hardware.setip.getmaskfromcidr`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.GetMaskFromCidr()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetMaskFromCidr(Int32 cidr)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cidr` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetMaskFromCidr` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.setip.getmaskfromcidr", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.setip.getmaskfromcidr", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.setip.getmaskfromcidr")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.setip.getmaskfromcidr", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.setip.getmaskfromcidr", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.setip.getmaskfromcidr", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
