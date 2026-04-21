---
title: UsedSubnetRemoved
description: Documentation for greg.SYSTEM.UsedSubnetRemoved
path: /api/hooks/system/usedsubnetremoved
---

# UsedSubnetRemoved

> **Hook ID:** `greg.SYSTEM.UsedSubnetRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.RemoveUsedSubnet

## Native Signature
```csharp
Il2Cpp.MainGameManager::RemoveUsedSubnet(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UsedSubnetRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UsedSubnetRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UsedSubnetRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UsedSubnetRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.UsedSubnetRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UsedSubnetRemoved fired")

greg.on("greg.SYSTEM.UsedSubnetRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UsedSubnetRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.UsedSubnetRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UsedSubnetRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UsedSubnetRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UsedSubnetRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
