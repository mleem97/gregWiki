---
title: CustomKeyHintRemoved
description: Documentation for greg.SYSTEM.CustomKeyHintRemoved
path: /api/hooks/system/customkeyhintremoved
---

# CustomKeyHintRemoved

> **Hook ID:** `greg.SYSTEM.CustomKeyHintRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.RemoveCustomKeyHint

## Native Signature
```csharp
Il2Cpp.StaticUIElements::RemoveCustomKeyHint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CustomKeyHintRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CustomKeyHintRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CustomKeyHintRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CustomKeyHintRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.CustomKeyHintRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CustomKeyHintRemoved fired")

greg.on("greg.SYSTEM.CustomKeyHintRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CustomKeyHintRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.CustomKeyHintRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CustomKeyHintRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CustomKeyHintRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CustomKeyHintRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
