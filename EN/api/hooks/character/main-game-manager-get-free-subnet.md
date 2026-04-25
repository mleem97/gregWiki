---
title: MainGameManager.GetFreeSubnet
description: Hook event for MainGameManager.GetFreeSubnet
path: /api/hooks/character/main-game-manager-get-free-subnet
---

# MainGameManager.GetFreeSubnet

> **Hook ID:** `greg.character.maingamemanager.getfreesubnet`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.GetFreeSubnet()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetFreeSubnet(Single appRequirements)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `appRequirements` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetFreeSubnet` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.getfreesubnet", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.getfreesubnet", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.getfreesubnet")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.getfreesubnet", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.getfreesubnet", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.getfreesubnet", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
