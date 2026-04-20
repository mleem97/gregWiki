---
title: ModLoader.LoadTexture
description: Hook event for ModLoader.LoadTexture
path: /api/hooks/persistence/mod-loader-load-texture
---

# ModLoader.LoadTexture

> **Hook ID:** `greg.persistence.modloader.loadtexture`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.LoadTexture()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Texture2D LoadTexture(String path)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `path` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadTexture` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.loadtexture", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.loadtexture", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.loadtexture")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.loadtexture", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.loadtexture", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.loadtexture", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Texture2D`
- **Safe to block?**: Yes
