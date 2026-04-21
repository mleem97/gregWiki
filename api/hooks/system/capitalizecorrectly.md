---
title: CapitalizeCorrectly
description: Documentation for greg.SYSTEM.CapitalizeCorrectly
path: /api/hooks/system/capitalizecorrectly
---

# CapitalizeCorrectly

> **Hook ID:** `greg.SYSTEM.CapitalizeCorrectly`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.CapitalizeCorrectly

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::CapitalizeCorrectly(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CapitalizeCorrectly` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CapitalizeCorrectly", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CapitalizeCorrectly");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CapitalizeCorrectly", function(payload)
    greg.log("Hook greg.SYSTEM.CapitalizeCorrectly received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CapitalizeCorrectly fired")

greg.on("greg.SYSTEM.CapitalizeCorrectly", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CapitalizeCorrectly", (payload) => {
    console.log("Hook greg.SYSTEM.CapitalizeCorrectly triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CapitalizeCorrectly".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CapitalizeCorrectly", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CapitalizeCorrectly fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
