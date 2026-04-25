---
title: ReturnVlanId
description: Documentation for greg.SYSTEM.ReturnVlanId
path: /api/hooks/system/returnvlanid
---

# ReturnVlanId

> **Hook ID:** `greg.SYSTEM.ReturnVlanId`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ReturnVlanId

## Native Signature
```csharp
Il2Cpp.MainGameManager::ReturnVlanId(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnVlanId` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReturnVlanId", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReturnVlanId");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReturnVlanId", function(payload)
    greg.log("Hook greg.SYSTEM.ReturnVlanId received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReturnVlanId fired")

greg.on("greg.SYSTEM.ReturnVlanId", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReturnVlanId", (payload) => {
    console.log("Hook greg.SYSTEM.ReturnVlanId triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReturnVlanId".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReturnVlanId", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReturnVlanId fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
