---
title: MainGameManager.GetServerPrefab
description: Hook event for MainGameManager.GetServerPrefab
path: /api/hooks/hardware/main-game-manager-get-server-prefab
---

# MainGameManager.GetServerPrefab

> **Hook ID:** `greg.hardware.maingamemanager.getserverprefab`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetServerPrefab()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetServerPrefab(Int32 serverType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `serverType` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetServerPrefab` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.maingamemanager.getserverprefab", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.maingamemanager.getserverprefab", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.maingamemanager.getserverprefab")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.maingamemanager.getserverprefab", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.maingamemanager.getserverprefab", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.maingamemanager.getserverprefab", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
