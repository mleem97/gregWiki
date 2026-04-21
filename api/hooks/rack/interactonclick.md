---
title: InteractOnClick
description: Documentation for greg.RACK.InteractOnClick
path: /api/hooks/rack/interactonclick
---

# InteractOnClick

> **Hook ID:** `greg.RACK.InteractOnClick`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.InteractOnClick

## Native Signature
```csharp
Il2Cpp.RackPosition::InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.InteractOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.InteractOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.InteractOnClick", function(payload)
    greg.log("Hook greg.RACK.InteractOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.InteractOnClick fired")

greg.on("greg.RACK.InteractOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.InteractOnClick", (payload) => {
    console.log("Hook greg.RACK.InteractOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.InteractOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.InteractOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.InteractOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
