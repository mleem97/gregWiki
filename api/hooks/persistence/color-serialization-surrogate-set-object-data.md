---
title: ColorSerializationSurrogate.SetObjectData
description: Hook event for ColorSerializationSurrogate.SetObjectData
path: /api/hooks/persistence/color-serialization-surrogate-set-object-data
---

# ColorSerializationSurrogate.SetObjectData

> **Hook ID:** `greg.persistence.colorserializationsurrogate.setobjectdata`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ColorSerializationSurrogate.SetObjectData()` and broadcasts an event to the `gregCore` EventBus.

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
Use this hook to react to `SetObjectData` events in `ColorSerializationSurrogate`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.colorserializationsurrogate.setobjectdata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.colorserializationsurrogate.setobjectdata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.colorserializationsurrogate.setobjectdata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.colorserializationsurrogate.setobjectdata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.colorserializationsurrogate.setobjectdata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.colorserializationsurrogate.setobjectdata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Object`
- **Safe to block?**: Yes
