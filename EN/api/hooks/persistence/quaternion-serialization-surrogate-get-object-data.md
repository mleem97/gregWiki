---
title: QuaternionSerializationSurrogate.GetObjectData
description: Hook event for QuaternionSerializationSurrogate.GetObjectData
path: /api/hooks/persistence/quaternion-serialization-surrogate-get-object-data
---

# QuaternionSerializationSurrogate.GetObjectData

> **Hook ID:** `greg.persistence.quaternionserializationsurrogate.getobjectdata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `QuaternionSerializationSurrogate.GetObjectData()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `GetObjectData` events in `QuaternionSerializationSurrogate`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.quaternionserializationsurrogate.getobjectdata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.quaternionserializationsurrogate.getobjectdata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.quaternionserializationsurrogate.getobjectdata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.quaternionserializationsurrogate.getobjectdata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.quaternionserializationsurrogate.getobjectdata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.quaternionserializationsurrogate.getobjectdata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
