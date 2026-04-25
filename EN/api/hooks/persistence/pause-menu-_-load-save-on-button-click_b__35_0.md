---
title: PauseMenu._LoadSaveOnButtonClick_b__35_0
description: Hook event for PauseMenu._LoadSaveOnButtonClick_b__35_0
path: /api/hooks/persistence/pause-menu-_-load-save-on-button-click_b__35_0
---

# PauseMenu._LoadSaveOnButtonClick_b__35_0

> **Hook ID:** `greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PauseMenu._LoadSaveOnButtonClick_b__35_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _LoadSaveOnButtonClick_b__35_0(String saveName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `saveName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `_LoadSaveOnButtonClick_b__35_0` events in `PauseMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.pausemenu._loadsaveonbuttonclick_b__35_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
