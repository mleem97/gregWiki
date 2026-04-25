---
title: ShowStaticCanvas
description: Documentation for greg.SYSTEM.ShowStaticCanvas
path: /api/hooks/system/showstaticcanvas
---

# ShowStaticCanvas

> **Hook ID:** `greg.SYSTEM.ShowStaticCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ShowStaticCanvas

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ShowStaticCanvas(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowStaticCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowStaticCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowStaticCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowStaticCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.ShowStaticCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowStaticCanvas fired")

greg.on("greg.SYSTEM.ShowStaticCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowStaticCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.ShowStaticCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowStaticCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowStaticCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowStaticCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
