---
title: MainGameManager.RemoveUsedVlanId
description: Hook event for MainGameManager.RemoveUsedVlanId
path: /api/hooks/character/main-game-manager-remove-used-vlan-id
---

# MainGameManager.RemoveUsedVlanId

> **Hook ID:** `greg.character.maingamemanager.removeusedvlanid`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.RemoveUsedVlanId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveUsedVlanId(Int32 vlanId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `vlanId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveUsedVlanId` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.removeusedvlanid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.removeusedvlanid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.removeusedvlanid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.removeusedvlanid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.removeusedvlanid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.removeusedvlanid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
