---
title: FCP_SpriteMeshEditor.MakeMesh
description: Hook event for FCP_SpriteMeshEditor.MakeMesh
path: /api/hooks/persistence/fcp_-sprite-mesh-editor-make-mesh
---

# FCP_SpriteMeshEditor.MakeMesh

> **Hook ID:** `greg.persistence.fcp_spritemesheditor.makemesh`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_SpriteMeshEditor.MakeMesh()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MakeMesh(Sprite sprite, Int32 x, Int32 y, MeshType meshtype)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `sprite` | `Sprite` | ... |
| `x` | `Int32` | ... |
| `y` | `Int32` | ... |
| `meshtype` | `MeshType` | ... |


## Using this Hook

::: tip
Use this hook to react to `MakeMesh` events in `FCP_SpriteMeshEditor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_spritemesheditor.makemesh", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_spritemesheditor.makemesh", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_spritemesheditor.makemesh")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_spritemesheditor.makemesh", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_spritemesheditor.makemesh", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_spritemesheditor.makemesh", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
