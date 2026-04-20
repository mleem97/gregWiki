---
title: ModLoader.LoadIcon
description: Hook event for ModLoader.LoadIcon
path: /api/hooks/persistence/mod-loader-load-icon
---

# ModLoader.LoadIcon

> **Hook ID:** `greg.persistence.modloader.loadicon`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.LoadIcon()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Sprite LoadIcon(String folderPath, String iconFile)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderPath` | `String` | ... |
| `iconFile` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadIcon` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.loadicon", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.loadicon", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.loadicon")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.loadicon", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.loadicon", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.loadicon", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Sprite`
- **Safe to block?**: Yes
