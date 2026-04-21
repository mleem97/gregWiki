---
title: ButtonFilterBroken
description: Documentation for greg.SYSTEM.ButtonFilterBroken
path: /api/hooks/system/buttonfilterbroken
---

# ButtonFilterBroken

> **Hook ID:** `greg.SYSTEM.ButtonFilterBroken`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterBroken

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterBroken()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterBroken` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterBroken", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterBroken");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterBroken", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterBroken received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterBroken fired")

greg.on("greg.SYSTEM.ButtonFilterBroken", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterBroken", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterBroken triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterBroken".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterBroken", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterBroken fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
