---
title: MainGameManager.GetPatchPanelPrefab
description: Hook event for MainGameManager.GetPatchPanelPrefab
path: /api/hooks/visualui/main-game-manager-get-patch-panel-prefab
---

# MainGameManager.GetPatchPanelPrefab

> **Hook ID:** `greg.visualui.maingamemanager.getpatchpanelprefab`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetPatchPanelPrefab()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetPatchPanelPrefab(Int32 switchType)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `switchType` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPatchPanelPrefab` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.maingamemanager.getpatchpanelprefab", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.maingamemanager.getpatchpanelprefab", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.maingamemanager.getpatchpanelprefab")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.maingamemanager.getpatchpanelprefab", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.maingamemanager.getpatchpanelprefab", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.maingamemanager.getpatchpanelprefab", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
