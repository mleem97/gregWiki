---
title: _Init_b__20_6
description: Documentation for greg.SYSTEM._Init_b__20_6
path: /api/hooks/system/-init-b--20-6
---

# _Init_b__20_6

> **Hook ID:** `greg.SYSTEM._Init_b__20_6`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt._Init_b__20_6

## Native Signature
```csharp
Il2Cpp.RayLookAt::_Init_b__20_6(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Init_b__20_6` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._Init_b__20_6", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._Init_b__20_6");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._Init_b__20_6", function(payload)
    greg.log("Hook greg.SYSTEM._Init_b__20_6 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._Init_b__20_6 fired")

greg.on("greg.SYSTEM._Init_b__20_6", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._Init_b__20_6", (payload) => {
    console.log("Hook greg.SYSTEM._Init_b__20_6 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._Init_b__20_6".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._Init_b__20_6", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._Init_b__20_6 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
