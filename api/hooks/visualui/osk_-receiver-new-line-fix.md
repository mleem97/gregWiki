---
title: OSK_Receiver.NewLineFix
description: Hook event for OSK_Receiver.NewLineFix
path: /api/hooks/visualui/osk_-receiver-new-line-fix
---

# OSK_Receiver.NewLineFix

> **Hook ID:** `greg.visualui.osk_receiver.newlinefix`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Receiver.NewLineFix()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void NewLineFix()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `NewLineFix` events in `OSK_Receiver`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_receiver.newlinefix", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_receiver.newlinefix", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_receiver.newlinefix")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_receiver.newlinefix", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_receiver.newlinefix", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_receiver.newlinefix", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
