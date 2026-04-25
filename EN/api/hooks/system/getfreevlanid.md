---
title: GetFreeVlanId
description: Documentation for greg.SYSTEM.GetFreeVlanId
path: /api/hooks/system/getfreevlanid
---

# GetFreeVlanId

> **Hook ID:** `greg.SYSTEM.GetFreeVlanId`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetFreeVlanId

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetFreeVlanId()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetFreeVlanId` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetFreeVlanId", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetFreeVlanId");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetFreeVlanId", function(payload)
    greg.log("Hook greg.SYSTEM.GetFreeVlanId received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetFreeVlanId fired")

greg.on("greg.SYSTEM.GetFreeVlanId", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetFreeVlanId", (payload) => {
    console.log("Hook greg.SYSTEM.GetFreeVlanId triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetFreeVlanId".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetFreeVlanId", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetFreeVlanId fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
