---
title: AutoCorrectRecursive
description: Documentation for greg.SYSTEM.AutoCorrectRecursive
path: /api/hooks/system/autocorrectrecursive
---

# AutoCorrectRecursive

> **Hook ID:** `greg.SYSTEM.AutoCorrectRecursive`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.AutoCorrectRecursive

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::AutoCorrectRecursive(string, List<string>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoCorrectRecursive` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoCorrectRecursive", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoCorrectRecursive");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoCorrectRecursive", function(payload)
    greg.log("Hook greg.SYSTEM.AutoCorrectRecursive received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoCorrectRecursive fired")

greg.on("greg.SYSTEM.AutoCorrectRecursive", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoCorrectRecursive", (payload) => {
    console.log("Hook greg.SYSTEM.AutoCorrectRecursive triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoCorrectRecursive".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoCorrectRecursive", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoCorrectRecursive fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
