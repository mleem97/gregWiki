---
title: Register
description: Documentation for greg.RACK.Register
path: /api/hooks/rack/register
---

# Register

> **Hook ID:** `greg.RACK.Register`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackAudioCuller.Register

## Native Signature
```csharp
Il2Cpp.RackAudioCuller::Register(Rack)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Register` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.Register", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.Register");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.Register", function(payload)
    greg.log("Hook greg.RACK.Register received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.Register fired")

greg.on("greg.RACK.Register", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.Register", (payload) => {
    console.log("Hook greg.RACK.Register triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.Register".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.Register", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.Register fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
