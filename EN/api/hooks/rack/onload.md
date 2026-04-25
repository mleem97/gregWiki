---
title: OnLoad
description: Documentation for greg.RACK.OnLoad
path: /api/hooks/rack/onload
---

# OnLoad

> **Hook ID:** `greg.RACK.OnLoad`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackMount.OnLoad

## Native Signature
```csharp
Il2Cpp.RackMount::OnLoad()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.OnLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.OnLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.OnLoad", function(payload)
    greg.log("Hook greg.RACK.OnLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.OnLoad fired")

greg.on("greg.RACK.OnLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.OnLoad", (payload) => {
    console.log("Hook greg.RACK.OnLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.OnLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.OnLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.OnLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
