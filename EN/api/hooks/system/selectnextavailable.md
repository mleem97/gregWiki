---
title: SelectNextAvailable
description: Documentation for greg.SYSTEM.SelectNextAvailable
path: /api/hooks/system/selectnextavailable
---

# SelectNextAvailable

> **Hook ID:** `greg.SYSTEM.SelectNextAvailable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.SelectNextAvailable

## Native Signature
```csharp
Il2Cpp.ComputerShop::SelectNextAvailable(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectNextAvailable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectNextAvailable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectNextAvailable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectNextAvailable", function(payload)
    greg.log("Hook greg.SYSTEM.SelectNextAvailable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectNextAvailable fired")

greg.on("greg.SYSTEM.SelectNextAvailable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectNextAvailable", (payload) => {
    console.log("Hook greg.SYSTEM.SelectNextAvailable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectNextAvailable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectNextAvailable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectNextAvailable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
