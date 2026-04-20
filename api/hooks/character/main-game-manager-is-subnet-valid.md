---
title: MainGameManager.IsSubnetValid
description: Hook event for MainGameManager.IsSubnetValid
path: /api/hooks/character/main-game-manager-is-subnet-valid
---

# MainGameManager.IsSubnetValid

> **Hook ID:** `greg.character.maingamemanager.issubnetvalid`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.IsSubnetValid()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsSubnetValid(String subnet)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `subnet` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsSubnetValid` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.maingamemanager.issubnetvalid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.maingamemanager.issubnetvalid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.maingamemanager.issubnetvalid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.maingamemanager.issubnetvalid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.maingamemanager.issubnetvalid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.maingamemanager.issubnetvalid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
