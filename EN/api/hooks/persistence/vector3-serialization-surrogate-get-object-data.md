---
title: Vector3SerializationSurrogate.GetObjectData
description: Hook event for Vector3SerializationSurrogate.GetObjectData
path: /api/hooks/persistence/vector3-serialization-surrogate-get-object-data
---

# Vector3SerializationSurrogate.GetObjectData

> **Hook ID:** `greg.persistence.vector3serializationsurrogate.getobjectdata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Vector3SerializationSurrogate.GetObjectData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GetObjectData(Object obj, SerializationInfo info, StreamingContext context)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `obj` | `Object` | ... |
| `info` | `SerializationInfo` | ... |
| `context` | `StreamingContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetObjectData` events in `Vector3SerializationSurrogate`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.vector3serializationsurrogate.getobjectdata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.vector3serializationsurrogate.getobjectdata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.vector3serializationsurrogate.getobjectdata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.vector3serializationsurrogate.getobjectdata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.vector3serializationsurrogate.getobjectdata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.vector3serializationsurrogate.getobjectdata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
