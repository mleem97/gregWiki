---
title: _PrintNetworkMap_b__42_4
description: Documentation for greg.SYSTEM._PrintNetworkMap_b__42_4
path: /api/hooks/system/-printnetworkmap-b--42-4
---

# _PrintNetworkMap_b__42_4

> **Hook ID:** `greg.SYSTEM._PrintNetworkMap_b__42_4`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__c._PrintNetworkMap_b__42_4

## Native Signature
```csharp
Il2Cpp.__c::_PrintNetworkMap_b__42_4(NetworkMap.Device)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_PrintNetworkMap_b__42_4` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._PrintNetworkMap_b__42_4", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._PrintNetworkMap_b__42_4");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._PrintNetworkMap_b__42_4", function(payload)
    greg.log("Hook greg.SYSTEM._PrintNetworkMap_b__42_4 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._PrintNetworkMap_b__42_4 fired")

greg.on("greg.SYSTEM._PrintNetworkMap_b__42_4", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._PrintNetworkMap_b__42_4", (payload) => {
    console.log("Hook greg.SYSTEM._PrintNetworkMap_b__42_4 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._PrintNetworkMap_b__42_4".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._PrintNetworkMap_b__42_4", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._PrintNetworkMap_b__42_4 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
