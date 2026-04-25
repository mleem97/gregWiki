---
title: ObjectAdded
description: Documentation for greg.SYSTEM.ObjectAdded
path: /api/hooks/system/objectadded
---

# ObjectAdded

> **Hook ID:** `greg.SYSTEM.ObjectAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TrolleyTrigger.ObjectAdded

## Native Signature
```csharp
Il2Cpp.TrolleyTrigger::ObjectAdded(Collider, UsableObject)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ObjectAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ObjectAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ObjectAdded", function(payload)
    greg.log("Hook greg.SYSTEM.ObjectAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ObjectAdded fired")

greg.on("greg.SYSTEM.ObjectAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ObjectAdded", (payload) => {
    console.log("Hook greg.SYSTEM.ObjectAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ObjectAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ObjectAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ObjectAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
