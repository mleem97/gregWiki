---
title: ButtonClear
description: Documentation for greg.SYSTEM.ButtonClear
path: /api/hooks/system/buttonclear
---

# ButtonClear

> **Hook ID:** `greg.SYSTEM.ButtonClear`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonClear

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonClear()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonClear` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonClear", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonClear");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonClear", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonClear received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonClear fired")

greg.on("greg.SYSTEM.ButtonClear", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonClear", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonClear triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonClear".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonClear", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonClear fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
