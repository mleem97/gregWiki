---
title: MoveNext
description: Documentation for greg.SYSTEM.MoveNext
path: /api/hooks/system/movenext
---

# MoveNext

> **Hook ID:** `greg.SYSTEM.MoveNext`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/_OnFinishSubmit_d__25.MoveNext

## Native Signature
```csharp
Il2Cpp._OnFinishSubmit_d__25::MoveNext()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoveNext` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MoveNext", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MoveNext");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MoveNext", function(payload)
    greg.log("Hook greg.SYSTEM.MoveNext received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MoveNext fired")

greg.on("greg.SYSTEM.MoveNext", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MoveNext", (payload) => {
    console.log("Hook greg.SYSTEM.MoveNext triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MoveNext".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MoveNext", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MoveNext fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
