---
title: CustomKey
description: Documentation for greg.SYSTEM.CustomKey
path: /api/hooks/system/customkey
---

# CustomKey

> **Hook ID:** `greg.SYSTEM.CustomKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ActionKeyHint.CustomKey

## Native Signature
```csharp
Il2Cpp.ActionKeyHint::CustomKey(InputAction, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CustomKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CustomKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CustomKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CustomKey", function(payload)
    greg.log("Hook greg.SYSTEM.CustomKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CustomKey fired")

greg.on("greg.SYSTEM.CustomKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CustomKey", (payload) => {
    console.log("Hook greg.SYSTEM.CustomKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CustomKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CustomKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CustomKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
