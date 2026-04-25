---
title: AssemblyTypeRegistry.BoxedGetHashCode
description: Hook event for AssemblyTypeRegistry.BoxedGetHashCode
path: /api/hooks/serialization/assembly-type-registry-boxed-get-hash-code
---

# AssemblyTypeRegistry.BoxedGetHashCode

> **Hook ID:** `greg.serialization.assemblytyperegistry.boxedgethashcode`
> **Category:** Serialization
> **Namespace:** `Unity.Entities.CodeGeneratedRegistry`

This hook intercepts calls to `AssemblyTypeRegistry.BoxedGetHashCode()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 BoxedGetHashCode(Object val, Int32 typeIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `val` | `Object` | ... |
| `typeIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `BoxedGetHashCode` events in `AssemblyTypeRegistry`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.assemblytyperegistry.boxedgethashcode", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.assemblytyperegistry.boxedgethashcode", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.assemblytyperegistry.boxedgethashcode")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.assemblytyperegistry.boxedgethashcode", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.assemblytyperegistry.boxedgethashcode", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.assemblytyperegistry.boxedgethashcode", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
