---
title: CullLoop
description: Documentation for greg.RACK.CullLoop
path: /api/hooks/rack/cullloop
---

# CullLoop

> **Hook ID:** `greg.RACK.CullLoop`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackAudioCuller.CullLoop

## Native Signature
```csharp
Il2Cpp.RackAudioCuller::CullLoop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CullLoop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.CullLoop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.CullLoop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.CullLoop", function(payload)
    greg.log("Hook greg.RACK.CullLoop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.CullLoop fired")

greg.on("greg.RACK.CullLoop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.CullLoop", (payload) => {
    console.log("Hook greg.RACK.CullLoop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.CullLoop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.CullLoop", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.CullLoop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
