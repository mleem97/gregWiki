---
title: ConnectionSpeedSet
description: Documentation for greg.NETWORK.ConnectionSpeedSet
path: /api/hooks/network/connectionspeedset
---

# ConnectionSpeedSet

> **Hook ID:** `greg.NETWORK.ConnectionSpeedSet`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.SetConnectionSpeed

## Native Signature
```csharp
Il2Cpp.CableLink::SetConnectionSpeed(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConnectionSpeedSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ConnectionSpeedSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ConnectionSpeedSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ConnectionSpeedSet", function(payload)
    greg.log("Hook greg.NETWORK.ConnectionSpeedSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ConnectionSpeedSet fired")

greg.on("greg.NETWORK.ConnectionSpeedSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ConnectionSpeedSet", (payload) => {
    console.log("Hook greg.NETWORK.ConnectionSpeedSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ConnectionSpeedSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ConnectionSpeedSet", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ConnectionSpeedSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
