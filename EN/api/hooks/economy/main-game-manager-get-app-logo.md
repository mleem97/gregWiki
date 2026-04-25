---
title: MainGameManager.GetAppLogo
description: Hook event for MainGameManager.GetAppLogo
path: /api/hooks/economy/main-game-manager-get-app-logo
---

# MainGameManager.GetAppLogo

> **Hook ID:** `greg.economy.maingamemanager.getapplogo`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetAppLogo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Sprite GetAppLogo(Int32 customerID, Int32 appID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `customerID` | `Int32` | ... |
| `appID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetAppLogo` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.maingamemanager.getapplogo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.maingamemanager.getapplogo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.maingamemanager.getapplogo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.maingamemanager.getapplogo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.maingamemanager.getapplogo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.maingamemanager.getapplogo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Sprite`
- **Safe to block?**: Yes
