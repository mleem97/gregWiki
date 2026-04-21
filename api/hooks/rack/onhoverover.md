---
title: OnHoverOver
description: Documentation for greg.RACK.OnHoverOver
path: /api/hooks/rack/onhoverover
---

# OnHoverOver

> **Hook ID:** `greg.RACK.OnHoverOver`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.OnHoverOver

## Native Signature
```csharp
Il2Cpp.RackPosition::OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnHoverOver` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.OnHoverOver", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.OnHoverOver");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.OnHoverOver", function(payload)
    greg.log("Hook greg.RACK.OnHoverOver received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.OnHoverOver fired")

greg.on("greg.RACK.OnHoverOver", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.OnHoverOver", (payload) => {
    console.log("Hook greg.RACK.OnHoverOver triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.OnHoverOver".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.OnHoverOver", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.OnHoverOver fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
