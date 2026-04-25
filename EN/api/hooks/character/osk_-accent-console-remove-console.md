---
title: OSK_AccentConsole.RemoveConsole
description: Hook event for OSK_AccentConsole.RemoveConsole
path: /api/hooks/character/osk_-accent-console-remove-console
---

# OSK_AccentConsole.RemoveConsole

> **Hook ID:** `greg.character.osk_accentconsole.removeconsole`
> **Category:** Character
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_AccentConsole.RemoveConsole()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveConsole()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RemoveConsole` events in `OSK_AccentConsole`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.osk_accentconsole.removeconsole", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.osk_accentconsole.removeconsole", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.osk_accentconsole.removeconsole")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.osk_accentconsole.removeconsole", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.osk_accentconsole.removeconsole", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.osk_accentconsole.removeconsole", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
