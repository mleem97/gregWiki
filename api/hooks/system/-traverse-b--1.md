---
title: _Traverse_b__1
description: Documentation for greg.SYSTEM._Traverse_b__1
path: /api/hooks/system/-traverse-b--1
---

# _Traverse_b__1

> **Hook ID:** `greg.SYSTEM._Traverse_b__1`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/__c__DisplayClass13_0._Traverse_b__1

## Native Signature
```csharp
Il2Cpp.__c__DisplayClass13_0::_Traverse_b__1(OSK_SpecialKeys)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Traverse_b__1` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._Traverse_b__1", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._Traverse_b__1");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._Traverse_b__1", function(payload)
    greg.log("Hook greg.SYSTEM._Traverse_b__1 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._Traverse_b__1 fired")

greg.on("greg.SYSTEM._Traverse_b__1", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._Traverse_b__1", (payload) => {
    console.log("Hook greg.SYSTEM._Traverse_b__1 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._Traverse_b__1".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._Traverse_b__1", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._Traverse_b__1 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
