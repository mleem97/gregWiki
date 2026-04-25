---
title: CreateRopeAttachPoint
description: Documentation for greg.NETWORK.CreateRopeAttachPoint
path: /api/hooks/network/createropeattachpoint
---

# CreateRopeAttachPoint

> **Hook ID:** `greg.NETWORK.CreateRopeAttachPoint`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.CreateRopeAttachPoint

## Native Signature
```csharp
Il2Cpp.CableLink::CreateRopeAttachPoint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateRopeAttachPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateRopeAttachPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateRopeAttachPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateRopeAttachPoint", function(payload)
    greg.log("Hook greg.NETWORK.CreateRopeAttachPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateRopeAttachPoint fired")

greg.on("greg.NETWORK.CreateRopeAttachPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateRopeAttachPoint", (payload) => {
    console.log("Hook greg.NETWORK.CreateRopeAttachPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateRopeAttachPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateRopeAttachPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateRopeAttachPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
