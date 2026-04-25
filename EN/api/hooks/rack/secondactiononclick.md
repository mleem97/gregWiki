---
title: SecondActionOnClick
description: Documentation for greg.RACK.SecondActionOnClick
path: /api/hooks/rack/secondactiononclick
---

# SecondActionOnClick

> **Hook ID:** `greg.RACK.SecondActionOnClick`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.SecondActionOnClick

## Native Signature
```csharp
Il2Cpp.RackPosition::SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SecondActionOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.SecondActionOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.SecondActionOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.SecondActionOnClick", function(payload)
    greg.log("Hook greg.RACK.SecondActionOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.SecondActionOnClick fired")

greg.on("greg.RACK.SecondActionOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.SecondActionOnClick", (payload) => {
    console.log("Hook greg.RACK.SecondActionOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.SecondActionOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.SecondActionOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.SecondActionOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
