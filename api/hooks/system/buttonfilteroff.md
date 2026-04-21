---
title: ButtonFilterOff
description: Documentation for greg.SYSTEM.ButtonFilterOff
path: /api/hooks/system/buttonfilteroff
---

# ButtonFilterOff

> **Hook ID:** `greg.SYSTEM.ButtonFilterOff`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterOff

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterOff()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterOff` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterOff", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterOff");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterOff", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterOff received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterOff fired")

greg.on("greg.SYSTEM.ButtonFilterOff", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterOff", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterOff triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterOff".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterOff", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterOff fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
