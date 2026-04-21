---
title: UnsubscribeFromRopeEvents
description: Documentation for greg.SYSTEM.UnsubscribeFromRopeEvents
path: /api/hooks/system/unsubscribefromropeevents
---

# UnsubscribeFromRopeEvents

> **Hook ID:** `greg.SYSTEM.UnsubscribeFromRopeEvents`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.UnsubscribeFromRopeEvents

## Native Signature
```csharp
Il2Cpp.RopeMesh::UnsubscribeFromRopeEvents()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnsubscribeFromRopeEvents` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UnsubscribeFromRopeEvents", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UnsubscribeFromRopeEvents");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UnsubscribeFromRopeEvents", function(payload)
    greg.log("Hook greg.SYSTEM.UnsubscribeFromRopeEvents received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UnsubscribeFromRopeEvents fired")

greg.on("greg.SYSTEM.UnsubscribeFromRopeEvents", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UnsubscribeFromRopeEvents", (payload) => {
    console.log("Hook greg.SYSTEM.UnsubscribeFromRopeEvents triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UnsubscribeFromRopeEvents".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UnsubscribeFromRopeEvents", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UnsubscribeFromRopeEvents fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
