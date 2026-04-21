---
title: __m__Finally1
description: Documentation for greg.SYSTEM.__m__Finally1
path: /api/hooks/system/--m--finally1
---

# __m__Finally1

> **Hook ID:** `greg.SYSTEM.__m__Finally1`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/_Talking_d__7.__m__Finally1

## Native Signature
```csharp
Il2Cpp._Talking_d__7::__m__Finally1()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__m__Finally1` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.__m__Finally1", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.__m__Finally1");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.__m__Finally1", function(payload)
    greg.log("Hook greg.SYSTEM.__m__Finally1 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.__m__Finally1 fired")

greg.on("greg.SYSTEM.__m__Finally1", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.__m__Finally1", (payload) => {
    console.log("Hook greg.SYSTEM.__m__Finally1 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.__m__Finally1".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.__m__Finally1", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.__m__Finally1 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
