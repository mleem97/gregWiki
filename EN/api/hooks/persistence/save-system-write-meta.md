---
title: SaveSystem.WriteMeta
description: Hook event for SaveSystem.WriteMeta
path: /api/hooks/persistence/save-system-write-meta
---

# SaveSystem.WriteMeta

> **Hook ID:** `greg.persistence.savesystem.writemeta`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.WriteMeta()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void WriteMeta(String savename, Int32 version, String nameOfSave)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `savename` | `String` | ... |
| `version` | `Int32` | ... |
| `nameOfSave` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `WriteMeta` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.writemeta", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.writemeta", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.writemeta")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.writemeta", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.writemeta", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.writemeta", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
