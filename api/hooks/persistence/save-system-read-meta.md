---
title: SaveSystem.ReadMeta
description: Hook event for SaveSystem.ReadMeta
path: /api/hooks/persistence/save-system-read-meta
---

# SaveSystem.ReadMeta

> **Hook ID:** `greg.persistence.savesystem.readmeta`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.ReadMeta()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
SaveMeta ReadMeta(String savename)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `savename` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ReadMeta` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.readmeta", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.readmeta", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.readmeta")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.readmeta", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.readmeta", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.readmeta", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `SaveMeta`
- **Safe to block?**: Yes
