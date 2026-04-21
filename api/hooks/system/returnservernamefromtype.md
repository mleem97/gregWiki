---
title: ReturnServerNameFromType
description: Documentation for greg.SYSTEM.ReturnServerNameFromType
path: /api/hooks/system/returnservernamefromtype
---

# ReturnServerNameFromType

> **Hook ID:** `greg.SYSTEM.ReturnServerNameFromType`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ReturnServerNameFromType

## Native Signature
```csharp
Il2Cpp.MainGameManager::ReturnServerNameFromType(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnServerNameFromType` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReturnServerNameFromType", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReturnServerNameFromType");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReturnServerNameFromType", function(payload)
    greg.log("Hook greg.SYSTEM.ReturnServerNameFromType received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReturnServerNameFromType fired")

greg.on("greg.SYSTEM.ReturnServerNameFromType", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReturnServerNameFromType", (payload) => {
    console.log("Hook greg.SYSTEM.ReturnServerNameFromType triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReturnServerNameFromType".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReturnServerNameFromType", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReturnServerNameFromType fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
