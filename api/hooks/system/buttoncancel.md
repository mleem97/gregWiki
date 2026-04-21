---
title: ButtonCancel
description: Documentation for greg.SYSTEM.ButtonCancel
path: /api/hooks/system/buttoncancel
---

# ButtonCancel

> **Hook ID:** `greg.SYSTEM.ButtonCancel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonCancel

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonCancel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancel", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancel fired")

greg.on("greg.SYSTEM.ButtonCancel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancel", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
