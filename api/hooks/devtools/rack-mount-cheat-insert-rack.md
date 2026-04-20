---
title: RackMount.CheatInsertRack
description: Hook event for RackMount.CheatInsertRack
path: /api/hooks/devtools/rack-mount-cheat-insert-rack
---

# RackMount.CheatInsertRack

> **Hook ID:** `greg.devtools.rackmount.cheatinsertrack`
> **Category:** Devtools
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackMount.CheatInsertRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void CheatInsertRack(GameObject go, Int32 type)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `go` | `GameObject` | ... |
| `type` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CheatInsertRack` events in `RackMount`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.devtools.rackmount.cheatinsertrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.devtools.rackmount.cheatinsertrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.devtools.rackmount.cheatinsertrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.devtools.rackmount.cheatinsertrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.devtools.rackmount.cheatinsertrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.devtools.rackmount.cheatinsertrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
