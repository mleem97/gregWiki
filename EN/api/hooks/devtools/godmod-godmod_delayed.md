---
title: GODMOD.GODMOD_delayed
description: Hook event for GODMOD.GODMOD_delayed
path: /api/hooks/devtools/godmod-godmod_delayed
---

# GODMOD.GODMOD_delayed

> **Hook ID:** `greg.devtools.godmod.godmod_delayed`
> **Category:** Devtools
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GODMOD.GODMOD_delayed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator GODMOD_delayed()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GODMOD_delayed` events in `GODMOD`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.devtools.godmod.godmod_delayed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.devtools.godmod.godmod_delayed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.devtools.godmod.godmod_delayed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.devtools.godmod.godmod_delayed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.devtools.godmod.godmod_delayed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.devtools.godmod.godmod_delayed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
