---
title: GetRopeAttachPoint
description: Documentation for greg.NETWORK.GetRopeAttachPoint
path: /api/hooks/network/getropeattachpoint
---

# GetRopeAttachPoint

> **Hook ID:** `greg.NETWORK.GetRopeAttachPoint`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.GetRopeAttachPoint

## Native Signature
```csharp
Il2Cpp.CableLink::GetRopeAttachPoint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetRopeAttachPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetRopeAttachPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetRopeAttachPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetRopeAttachPoint", function(payload)
    greg.log("Hook greg.NETWORK.GetRopeAttachPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetRopeAttachPoint fired")

greg.on("greg.NETWORK.GetRopeAttachPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetRopeAttachPoint", (payload) => {
    console.log("Hook greg.NETWORK.GetRopeAttachPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetRopeAttachPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetRopeAttachPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetRopeAttachPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
