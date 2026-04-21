---
title: Get
description: Documentation for greg.SYSTEM.Get
path: /api/hooks/system/get
---

# Get

> **Hook ID:** `greg.SYSTEM.Get`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UnitySourceGeneratedAssemblyMonoScriptTypes_v1.Get

## Native Signature
```csharp
Il2Cpp.UnitySourceGeneratedAssemblyMonoScriptTypes_v1::Get()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Get` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Get", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Get");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Get", function(payload)
    greg.log("Hook greg.SYSTEM.Get received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Get fired")

greg.on("greg.SYSTEM.Get", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Get", (payload) => {
    console.log("Hook greg.SYSTEM.Get triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Get".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Get", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Get fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
