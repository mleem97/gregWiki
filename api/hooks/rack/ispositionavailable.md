---
title: IsPositionAvailable
description: Documentation for greg.RACK.IsPositionAvailable
path: /api/hooks/rack/ispositionavailable
---

# IsPositionAvailable

> **Hook ID:** `greg.RACK.IsPositionAvailable`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.IsPositionAvailable

## Native Signature
```csharp
Il2Cpp.Rack::IsPositionAvailable(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsPositionAvailable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.IsPositionAvailable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.IsPositionAvailable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.IsPositionAvailable", function(payload)
    greg.log("Hook greg.RACK.IsPositionAvailable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.IsPositionAvailable fired")

greg.on("greg.RACK.IsPositionAvailable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.IsPositionAvailable", (payload) => {
    console.log("Hook greg.RACK.IsPositionAvailable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.IsPositionAvailable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.IsPositionAvailable", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.IsPositionAvailable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
