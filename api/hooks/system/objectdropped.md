---
title: ObjectDropped
description: Documentation for greg.SYSTEM.ObjectDropped
path: /api/hooks/system/objectdropped
---

# ObjectDropped

> **Hook ID:** `greg.SYSTEM.ObjectDropped`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.DropObject

## Native Signature
```csharp
Il2Cpp.UsableObject::DropObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectDropped` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ObjectDropped", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ObjectDropped");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ObjectDropped", function(payload)
    greg.log("Hook greg.SYSTEM.ObjectDropped received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ObjectDropped fired")

greg.on("greg.SYSTEM.ObjectDropped", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ObjectDropped", (payload) => {
    console.log("Hook greg.SYSTEM.ObjectDropped triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ObjectDropped".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ObjectDropped", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ObjectDropped fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
