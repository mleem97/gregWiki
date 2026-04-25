---
title: InstantiateErrorWarningSign
description: Documentation for greg.SYSTEM.InstantiateErrorWarningSign
path: /api/hooks/system/instantiateerrorwarningsign
---

# InstantiateErrorWarningSign

> **Hook ID:** `greg.SYSTEM.InstantiateErrorWarningSign`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.InstantiateErrorWarningSign

## Native Signature
```csharp
Il2Cpp.StaticUIElements::InstantiateErrorWarningSign(bool, Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InstantiateErrorWarningSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InstantiateErrorWarningSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InstantiateErrorWarningSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InstantiateErrorWarningSign", function(payload)
    greg.log("Hook greg.SYSTEM.InstantiateErrorWarningSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InstantiateErrorWarningSign fired")

greg.on("greg.SYSTEM.InstantiateErrorWarningSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InstantiateErrorWarningSign", (payload) => {
    console.log("Hook greg.SYSTEM.InstantiateErrorWarningSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InstantiateErrorWarningSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InstantiateErrorWarningSign", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InstantiateErrorWarningSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
