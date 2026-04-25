---
title: ShowCanvas
description: Documentation for greg.SYSTEM.ShowCanvas
path: /api/hooks/system/showcanvas
---

# ShowCanvas

> **Hook ID:** `greg.SYSTEM.ShowCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ShowCanvas

## Native Signature
```csharp
Il2Cpp.SetIP::ShowCanvas(Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.ShowCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowCanvas fired")

greg.on("greg.SYSTEM.ShowCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.ShowCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
