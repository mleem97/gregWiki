---
title: MainGameManager.ReturnSubnet
description: Hook event for MainGameManager.ReturnSubnet
path: /api/hooks/character/main-game-manager-return-subnet
---

# MainGameManager.ReturnSubnet

> **Hook ID:** `greg.character.maingamemanager.returnsubnet`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ReturnSubnet()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ReturnSubnet(String subnet)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `subnet` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ReturnSubnet` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.returnsubnet", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.returnsubnet", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.returnsubnet")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.returnsubnet", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.returnsubnet", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.returnsubnet", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
