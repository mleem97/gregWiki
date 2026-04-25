---
title: ModLoader.LoadStaticItem
description: Hook event for ModLoader.LoadStaticItem
path: /api/hooks/persistence/mod-loader-load-static-item
---

# ModLoader.LoadStaticItem

> **Hook ID:** `greg.persistence.modloader.loadstaticitem`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.LoadStaticItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadStaticItem(String folderPath, String folderName, StaticItemConfig config)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderPath` | `String` | ... |
| `folderName` | `String` | ... |
| `config` | `StaticItemConfig` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadStaticItem` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.loadstaticitem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.loadstaticitem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.loadstaticitem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.loadstaticitem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.loadstaticitem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.loadstaticitem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
