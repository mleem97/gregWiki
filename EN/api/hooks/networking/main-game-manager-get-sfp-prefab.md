---
title: MainGameManager.GetSfpPrefab
description: Hook event for MainGameManager.GetSfpPrefab
path: /api/hooks/networking/main-game-manager-get-sfp-prefab
---

# MainGameManager.GetSfpPrefab

> **Hook ID:** `greg.networking.maingamemanager.getsfpprefab`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetSfpPrefab()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetSfpPrefab(Int32 prefabID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `prefabID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetSfpPrefab` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.maingamemanager.getsfpprefab", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.maingamemanager.getsfpprefab", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.maingamemanager.getsfpprefab")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.maingamemanager.getsfpprefab", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.maingamemanager.getsfpprefab", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.maingamemanager.getsfpprefab", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
