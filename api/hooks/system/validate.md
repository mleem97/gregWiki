---
title: Validate
description: Documentation for greg.SYSTEM.Validate
path: /api/hooks/system/validate
---

# Validate

> **Hook ID:** `greg.SYSTEM.Validate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_PhoneNumberValidator.Validate

## Native Signature
```csharp
Il2Cpp.TMP_PhoneNumberValidator::Validate(string, int, char)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Validate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Validate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Validate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Validate", function(payload)
    greg.log("Hook greg.SYSTEM.Validate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Validate fired")

greg.on("greg.SYSTEM.Validate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Validate", (payload) => {
    console.log("Hook greg.SYSTEM.Validate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Validate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Validate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Validate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
