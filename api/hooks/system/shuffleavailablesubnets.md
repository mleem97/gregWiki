---
title: ShuffleAvailableSubnets
description: Documentation for greg.SYSTEM.ShuffleAvailableSubnets
path: /api/hooks/system/shuffleavailablesubnets
---

# ShuffleAvailableSubnets

> **Hook ID:** `greg.SYSTEM.ShuffleAvailableSubnets`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ShuffleAvailableSubnets

## Native Signature
```csharp
Il2Cpp.MainGameManager::ShuffleAvailableSubnets()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShuffleAvailableSubnets` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShuffleAvailableSubnets", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShuffleAvailableSubnets");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShuffleAvailableSubnets", function(payload)
    greg.log("Hook greg.SYSTEM.ShuffleAvailableSubnets received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShuffleAvailableSubnets fired")

greg.on("greg.SYSTEM.ShuffleAvailableSubnets", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShuffleAvailableSubnets", (payload) => {
    console.log("Hook greg.SYSTEM.ShuffleAvailableSubnets triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShuffleAvailableSubnets".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShuffleAvailableSubnets", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShuffleAvailableSubnets fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
