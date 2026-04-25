---
title: GetBindingInfo
description: Documentation for greg.SYSTEM.GetBindingInfo
path: /api/hooks/system/getbindinginfo
---

# GetBindingInfo

> **Hook ID:** `greg.SYSTEM.GetBindingInfo`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ActionKeyHint.GetBindingInfo

## Native Signature
```csharp
Il2Cpp.ActionKeyHint::GetBindingInfo()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetBindingInfo` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetBindingInfo", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetBindingInfo");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetBindingInfo", function(payload)
    greg.log("Hook greg.SYSTEM.GetBindingInfo received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetBindingInfo fired")

greg.on("greg.SYSTEM.GetBindingInfo", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetBindingInfo", (payload) => {
    console.log("Hook greg.SYSTEM.GetBindingInfo triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetBindingInfo".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetBindingInfo", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetBindingInfo fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
