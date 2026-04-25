---
title: AssemblyTypeRegistry.SetSharedStaticTypeIndices
description: Hook event for AssemblyTypeRegistry.SetSharedStaticTypeIndices
path: /api/hooks/serialization/assembly-type-registry-set-shared-static-type-indices
---

# AssemblyTypeRegistry.SetSharedStaticTypeIndices

> **Hook ID:** `greg.serialization.assemblytyperegistry.setsharedstatictypeindices`
> **Category:** Serialization
> **Namespace:** `Unity.Entities.CodeGeneratedRegistry`

This hook intercepts calls to `AssemblyTypeRegistry.SetSharedStaticTypeIndices()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetSharedStaticTypeIndices(Int32* pTypeInfos, Int32 count)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `pTypeInfos` | `Int32*` | ... |
| `count` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetSharedStaticTypeIndices` events in `AssemblyTypeRegistry`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.assemblytyperegistry.setsharedstatictypeindices", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.assemblytyperegistry.setsharedstatictypeindices", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.assemblytyperegistry.setsharedstatictypeindices")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.assemblytyperegistry.setsharedstatictypeindices", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.assemblytyperegistry.setsharedstatictypeindices", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.assemblytyperegistry.setsharedstatictypeindices", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
