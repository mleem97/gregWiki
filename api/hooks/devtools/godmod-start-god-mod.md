---
title: GODMOD.StartGodMod
description: Hook event for GODMOD.StartGodMod
path: /api/hooks/devtools/godmod-start-god-mod
---

# GODMOD.StartGodMod

> **Hook ID:** `greg.devtools.godmod.startgodmod`
> **Category:** Devtools
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GODMOD.StartGodMod()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StartGodMod()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StartGodMod` events in `GODMOD`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.devtools.godmod.startgodmod", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.devtools.godmod.startgodmod", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.devtools.godmod.startgodmod")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.devtools.godmod.startgodmod", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.devtools.godmod.startgodmod", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.devtools.godmod.startgodmod", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
