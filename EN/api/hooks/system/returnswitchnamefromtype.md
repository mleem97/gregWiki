---
title: ReturnSwitchNameFromType
description: Documentation for greg.SYSTEM.ReturnSwitchNameFromType
path: /api/hooks/system/returnswitchnamefromtype
---

# ReturnSwitchNameFromType

> **Hook ID:** `greg.SYSTEM.ReturnSwitchNameFromType`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ReturnSwitchNameFromType

## Native Signature
```csharp
Il2Cpp.MainGameManager::ReturnSwitchNameFromType(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnSwitchNameFromType` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReturnSwitchNameFromType", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReturnSwitchNameFromType");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReturnSwitchNameFromType", function(payload)
    greg.log("Hook greg.SYSTEM.ReturnSwitchNameFromType received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReturnSwitchNameFromType fired")

greg.on("greg.SYSTEM.ReturnSwitchNameFromType", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReturnSwitchNameFromType", (payload) => {
    console.log("Hook greg.SYSTEM.ReturnSwitchNameFromType triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReturnSwitchNameFromType".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReturnSwitchNameFromType", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReturnSwitchNameFromType fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
