---
title: Unregister
description: Documentation for greg.RACK.Unregister
path: /api/hooks/rack/unregister
---

# Unregister

> **Hook ID:** `greg.RACK.Unregister`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackAudioCuller.Unregister

## Native Signature
```csharp
Il2Cpp.RackAudioCuller::Unregister(Rack)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Unregister` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.Unregister", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.Unregister");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.Unregister", function(payload)
    greg.log("Hook greg.RACK.Unregister received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.Unregister fired")

greg.on("greg.RACK.Unregister", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.Unregister", (payload) => {
    console.log("Hook greg.RACK.Unregister triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.Unregister".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.Unregister", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.Unregister fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
