---
title: OSK_Receiver.ModifyLastChar
description: Hook event for OSK_Receiver.ModifyLastChar
path: /api/hooks/visualui/osk_-receiver-modify-last-char
---

# OSK_Receiver.ModifyLastChar

> **Hook ID:** `greg.visualui.osk_receiver.modifylastchar`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Receiver.ModifyLastChar()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ModifyLastChar(String newLastChar)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newLastChar` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ModifyLastChar` events in `OSK_Receiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_receiver.modifylastchar", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_receiver.modifylastchar", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_receiver.modifylastchar")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_receiver.modifylastchar", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_receiver.modifylastchar", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_receiver.modifylastchar", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
