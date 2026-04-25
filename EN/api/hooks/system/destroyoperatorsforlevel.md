---
title: DestroyOperatorsForLevel
description: Documentation for greg.SYSTEM.DestroyOperatorsForLevel
path: /api/hooks/system/destroyoperatorsforlevel
---

# DestroyOperatorsForLevel

> **Hook ID:** `greg.SYSTEM.DestroyOperatorsForLevel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.DestroyOperatorsForLevel

## Native Signature
```csharp
Il2Cpp.CommandCenter::DestroyOperatorsForLevel(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DestroyOperatorsForLevel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DestroyOperatorsForLevel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DestroyOperatorsForLevel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DestroyOperatorsForLevel", function(payload)
    greg.log("Hook greg.SYSTEM.DestroyOperatorsForLevel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DestroyOperatorsForLevel fired")

greg.on("greg.SYSTEM.DestroyOperatorsForLevel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DestroyOperatorsForLevel", (payload) => {
    console.log("Hook greg.SYSTEM.DestroyOperatorsForLevel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DestroyOperatorsForLevel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DestroyOperatorsForLevel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DestroyOperatorsForLevel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
