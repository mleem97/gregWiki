---
title: ButtonFilterAll
description: Documentation for greg.SYSTEM.ButtonFilterAll
path: /api/hooks/system/buttonfilterall
---

# ButtonFilterAll

> **Hook ID:** `greg.SYSTEM.ButtonFilterAll`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterAll

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterAll()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterAll` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterAll", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterAll");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterAll", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterAll received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterAll fired")

greg.on("greg.SYSTEM.ButtonFilterAll", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterAll", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterAll triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterAll".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterAll", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterAll fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
