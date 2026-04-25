---
title: GetMaskFromCidr
description: Documentation for greg.SYSTEM.GetMaskFromCidr
path: /api/hooks/system/getmaskfromcidr
---

# GetMaskFromCidr

> **Hook ID:** `greg.SYSTEM.GetMaskFromCidr`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.GetMaskFromCidr

## Native Signature
```csharp
Il2Cpp.SetIP::GetMaskFromCidr(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetMaskFromCidr` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetMaskFromCidr", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetMaskFromCidr");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetMaskFromCidr", function(payload)
    greg.log("Hook greg.SYSTEM.GetMaskFromCidr received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetMaskFromCidr fired")

greg.on("greg.SYSTEM.GetMaskFromCidr", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetMaskFromCidr", (payload) => {
    console.log("Hook greg.SYSTEM.GetMaskFromCidr triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetMaskFromCidr".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetMaskFromCidr", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetMaskFromCidr fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
