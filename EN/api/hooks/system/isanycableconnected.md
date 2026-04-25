---
title: IsAnyCableConnected
description: Documentation for greg.SYSTEM.IsAnyCableConnected
path: /api/hooks/system/isanycableconnected
---

# IsAnyCableConnected

> **Hook ID:** `greg.SYSTEM.IsAnyCableConnected`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PatchPanel.IsAnyCableConnected

## Native Signature
```csharp
Il2Cpp.PatchPanel::IsAnyCableConnected()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAnyCableConnected` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsAnyCableConnected", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsAnyCableConnected");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsAnyCableConnected", function(payload)
    greg.log("Hook greg.SYSTEM.IsAnyCableConnected received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsAnyCableConnected fired")

greg.on("greg.SYSTEM.IsAnyCableConnected", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsAnyCableConnected", (payload) => {
    console.log("Hook greg.SYSTEM.IsAnyCableConnected triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsAnyCableConnected".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsAnyCableConnected", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsAnyCableConnected fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
