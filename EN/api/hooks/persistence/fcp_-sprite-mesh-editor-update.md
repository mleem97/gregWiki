---
title: FCP_SpriteMeshEditor.Update
description: Hook event for FCP_SpriteMeshEditor.Update
path: /api/hooks/persistence/fcp_-sprite-mesh-editor-update
---

# FCP_SpriteMeshEditor.Update

> **Hook ID:** `greg.persistence.fcp_spritemesheditor.update`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_SpriteMeshEditor.Update()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Update()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Update` events in `FCP_SpriteMeshEditor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_spritemesheditor.update", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_spritemesheditor.update", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_spritemesheditor.update")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_spritemesheditor.update", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_spritemesheditor.update", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_spritemesheditor.update", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
