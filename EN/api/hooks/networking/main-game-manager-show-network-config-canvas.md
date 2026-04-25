---
title: MainGameManager.ShowNetworkConfigCanvas
description: Hook event for MainGameManager.ShowNetworkConfigCanvas
path: /api/hooks/networking/main-game-manager-show-network-config-canvas
---

# MainGameManager.ShowNetworkConfigCanvas

> **Hook ID:** `greg.networking.maingamemanager.shownetworkconfigcanvas`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ShowNetworkConfigCanvas()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowNetworkConfigCanvas(NetworkSwitch networkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowNetworkConfigCanvas` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.maingamemanager.shownetworkconfigcanvas", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.maingamemanager.shownetworkconfigcanvas", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.maingamemanager.shownetworkconfigcanvas")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.maingamemanager.shownetworkconfigcanvas", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.maingamemanager.shownetworkconfigcanvas", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.maingamemanager.shownetworkconfigcanvas", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
