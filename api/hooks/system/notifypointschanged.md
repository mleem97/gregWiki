---
title: NotifyPointsChanged
description: Documentation for greg.SYSTEM.NotifyPointsChanged
path: /api/hooks/system/notifypointschanged
---

# NotifyPointsChanged

> **Hook ID:** `greg.SYSTEM.NotifyPointsChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.NotifyPointsChanged

## Native Signature
```csharp
Il2Cpp.Rope::NotifyPointsChanged()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NotifyPointsChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NotifyPointsChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NotifyPointsChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NotifyPointsChanged", function(payload)
    greg.log("Hook greg.SYSTEM.NotifyPointsChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NotifyPointsChanged fired")

greg.on("greg.SYSTEM.NotifyPointsChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NotifyPointsChanged", (payload) => {
    console.log("Hook greg.SYSTEM.NotifyPointsChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NotifyPointsChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NotifyPointsChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NotifyPointsChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
