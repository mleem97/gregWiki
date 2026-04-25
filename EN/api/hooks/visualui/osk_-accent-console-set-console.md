---
title: OSK_AccentConsole.SetConsole
description: Hook event for OSK_AccentConsole.SetConsole
path: /api/hooks/visualui/osk_-accent-console-set-console
---

# OSK_AccentConsole.SetConsole

> **Hook ID:** `greg.visualui.osk_accentconsole.setconsole`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_AccentConsole.SetConsole()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetConsole(OSK_LongPressPacket packet)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `packet` | `OSK_LongPressPacket` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetConsole` events in `OSK_AccentConsole`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_accentconsole.setconsole", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_accentconsole.setconsole", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_accentconsole.setconsole")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_accentconsole.setconsole", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_accentconsole.setconsole", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_accentconsole.setconsole", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
