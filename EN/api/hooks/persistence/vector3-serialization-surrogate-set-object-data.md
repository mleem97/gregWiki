---
title: Vector3SerializationSurrogate.SetObjectData
description: Hook event for Vector3SerializationSurrogate.SetObjectData
path: /api/hooks/persistence/vector3-serialization-surrogate-set-object-data
---

# Vector3SerializationSurrogate.SetObjectData

> **Hook ID:** `greg.persistence.vector3serializationsurrogate.setobjectdata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Vector3SerializationSurrogate.SetObjectData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Object SetObjectData(Object obj, SerializationInfo info, StreamingContext context, ISurrogateSelector selector)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `obj` | `Object` | ... |
| `info` | `SerializationInfo` | ... |
| `context` | `StreamingContext` | ... |
| `selector` | `ISurrogateSelector` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetObjectData` events in `Vector3SerializationSurrogate`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.vector3serializationsurrogate.setobjectdata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.vector3serializationsurrogate.setobjectdata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.vector3serializationsurrogate.setobjectdata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.vector3serializationsurrogate.setobjectdata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.vector3serializationsurrogate.setobjectdata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.vector3serializationsurrogate.setobjectdata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Object`
- **Safe to block?**: Yes
