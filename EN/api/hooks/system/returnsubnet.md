---
title: ReturnSubnet
description: Documentation for greg.SYSTEM.ReturnSubnet
path: /api/hooks/system/returnsubnet
---

# ReturnSubnet

> **Hook ID:** `greg.SYSTEM.ReturnSubnet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ReturnSubnet

## Native Signature
```csharp
Il2Cpp.MainGameManager::ReturnSubnet(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnSubnet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReturnSubnet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReturnSubnet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReturnSubnet", function(payload)
    greg.log("Hook greg.SYSTEM.ReturnSubnet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReturnSubnet fired")

greg.on("greg.SYSTEM.ReturnSubnet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReturnSubnet", (payload) => {
    console.log("Hook greg.SYSTEM.ReturnSubnet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReturnSubnet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReturnSubnet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReturnSubnet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
