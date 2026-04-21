---
title: UsedVlanIdRemoved
description: Documentation for greg.SYSTEM.UsedVlanIdRemoved
path: /api/hooks/system/usedvlanidremoved
---

# UsedVlanIdRemoved

> **Hook ID:** `greg.SYSTEM.UsedVlanIdRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.RemoveUsedVlanId

## Native Signature
```csharp
Il2Cpp.MainGameManager::RemoveUsedVlanId(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UsedVlanIdRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UsedVlanIdRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UsedVlanIdRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UsedVlanIdRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.UsedVlanIdRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UsedVlanIdRemoved fired")

greg.on("greg.SYSTEM.UsedVlanIdRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UsedVlanIdRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.UsedVlanIdRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UsedVlanIdRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UsedVlanIdRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UsedVlanIdRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
