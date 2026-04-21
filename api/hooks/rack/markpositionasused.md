---
title: MarkPositionAsUsed
description: Documentation for greg.RACK.MarkPositionAsUsed
path: /api/hooks/rack/markpositionasused
---

# MarkPositionAsUsed

> **Hook ID:** `greg.RACK.MarkPositionAsUsed`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.MarkPositionAsUsed

## Native Signature
```csharp
Il2Cpp.Rack::MarkPositionAsUsed(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MarkPositionAsUsed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.MarkPositionAsUsed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.MarkPositionAsUsed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.MarkPositionAsUsed", function(payload)
    greg.log("Hook greg.RACK.MarkPositionAsUsed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.MarkPositionAsUsed fired")

greg.on("greg.RACK.MarkPositionAsUsed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.MarkPositionAsUsed", (payload) => {
    console.log("Hook greg.RACK.MarkPositionAsUsed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.MarkPositionAsUsed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.MarkPositionAsUsed", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.MarkPositionAsUsed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
