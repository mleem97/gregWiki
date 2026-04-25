---
title: UsableObject.MoveToStorage
description: Hook event for UsableObject.MoveToStorage
path: /api/hooks/character/usable-object-move-to-storage
---

# UsableObject.MoveToStorage

> **Hook ID:** `greg.character.usableobject.movetostorage`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.MoveToStorage()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MoveToStorage(Transform _pos, Int32 _positionIndex, Int32 _storageUid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_pos` | `Transform` | ... |
| `_positionIndex` | `Int32` | ... |
| `_storageUid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `MoveToStorage` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.usableobject.movetostorage", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.usableobject.movetostorage", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.usableobject.movetostorage")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.usableobject.movetostorage", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.usableobject.movetostorage", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.usableobject.movetostorage", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
