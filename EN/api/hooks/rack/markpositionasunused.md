---
title: MarkPositionAsUnused
description: Documentation for greg.RACK.MarkPositionAsUnused
path: /api/hooks/rack/markpositionasunused
---

# MarkPositionAsUnused

> **Hook ID:** `greg.RACK.MarkPositionAsUnused`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.MarkPositionAsUnused

## Native Signature
```csharp
Il2Cpp.Rack::MarkPositionAsUnused(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MarkPositionAsUnused` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.MarkPositionAsUnused", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.MarkPositionAsUnused");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.MarkPositionAsUnused", function(payload)
    greg.log("Hook greg.RACK.MarkPositionAsUnused received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.MarkPositionAsUnused fired")

greg.on("greg.RACK.MarkPositionAsUnused", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.MarkPositionAsUnused", (payload) => {
    console.log("Hook greg.RACK.MarkPositionAsUnused triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.MarkPositionAsUnused".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.MarkPositionAsUnused", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.MarkPositionAsUnused fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
