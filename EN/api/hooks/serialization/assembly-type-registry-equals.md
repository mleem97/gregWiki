---
title: AssemblyTypeRegistry.Equals
description: Hook event for AssemblyTypeRegistry.Equals
path: /api/hooks/serialization/assembly-type-registry-equals
---

# AssemblyTypeRegistry.Equals

> **Hook ID:** `greg.serialization.assemblytyperegistry.equals`
> **Category:** Serialization
> **Namespace:** `Unity.Entities.CodeGeneratedRegistry`

This hook intercepts calls to `AssemblyTypeRegistry.Equals()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean Equals(Object lhs, Object rhs, Int32 typeIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `lhs` | `Object` | ... |
| `rhs` | `Object` | ... |
| `typeIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `Equals` events in `AssemblyTypeRegistry`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.assemblytyperegistry.equals", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.assemblytyperegistry.equals", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.assemblytyperegistry.equals")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.assemblytyperegistry.equals", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.assemblytyperegistry.equals", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.assemblytyperegistry.equals", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
