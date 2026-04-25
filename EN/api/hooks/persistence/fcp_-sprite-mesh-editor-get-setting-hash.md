---
title: FCP_SpriteMeshEditor.GetSettingHash
description: Hook event for FCP_SpriteMeshEditor.GetSettingHash
path: /api/hooks/persistence/fcp_-sprite-mesh-editor-get-setting-hash
---

# FCP_SpriteMeshEditor.GetSettingHash

> **Hook ID:** `greg.persistence.fcp_spritemesheditor.getsettinghash`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FCP_SpriteMeshEditor.GetSettingHash()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetSettingHash()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetSettingHash` events in `FCP_SpriteMeshEditor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.fcp_spritemesheditor.getsettinghash", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.fcp_spritemesheditor.getsettinghash", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.fcp_spritemesheditor.getsettinghash")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.fcp_spritemesheditor.getsettinghash", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.fcp_spritemesheditor.getsettinghash", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.fcp_spritemesheditor.getsettinghash", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
