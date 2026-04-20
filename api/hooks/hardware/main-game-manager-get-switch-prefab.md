---
title: MainGameManager.GetSwitchPrefab
description: Hook event for MainGameManager.GetSwitchPrefab
path: /api/hooks/hardware/main-game-manager-get-switch-prefab
---

# MainGameManager.GetSwitchPrefab

> **Hook ID:** `greg.hardware.maingamemanager.getswitchprefab`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetSwitchPrefab()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetSwitchPrefab(Int32 switchType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `switchType` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetSwitchPrefab` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.maingamemanager.getswitchprefab", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.maingamemanager.getswitchprefab", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.maingamemanager.getswitchprefab")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.maingamemanager.getswitchprefab", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.maingamemanager.getswitchprefab", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.maingamemanager.getswitchprefab", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
