---
title: ComputeStringHash
description: Documentation for greg.SYSTEM.ComputeStringHash
path: /api/hooks/system/computestringhash
---

# ComputeStringHash

> **Hook ID:** `greg.SYSTEM.ComputeStringHash`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/_PrivateImplementationDetails_.ComputeStringHash

## Native Signature
```csharp
Il2Cpp._PrivateImplementationDetails_::ComputeStringHash(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComputeStringHash` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ComputeStringHash", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ComputeStringHash");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ComputeStringHash", function(payload)
    greg.log("Hook greg.SYSTEM.ComputeStringHash received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ComputeStringHash fired")

greg.on("greg.SYSTEM.ComputeStringHash", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ComputeStringHash", (payload) => {
    console.log("Hook greg.SYSTEM.ComputeStringHash triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ComputeStringHash".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ComputeStringHash", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ComputeStringHash fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
