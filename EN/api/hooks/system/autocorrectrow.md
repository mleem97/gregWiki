---
title: AutoCorrectRow
description: Documentation for greg.SYSTEM.AutoCorrectRow
path: /api/hooks/system/autocorrectrow
---

# AutoCorrectRow

> **Hook ID:** `greg.SYSTEM.AutoCorrectRow`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.AutoCorrectRow

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::AutoCorrectRow(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoCorrectRow` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoCorrectRow", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoCorrectRow");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoCorrectRow", function(payload)
    greg.log("Hook greg.SYSTEM.AutoCorrectRow received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoCorrectRow fired")

greg.on("greg.SYSTEM.AutoCorrectRow", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoCorrectRow", (payload) => {
    console.log("Hook greg.SYSTEM.AutoCorrectRow triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoCorrectRow".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoCorrectRow", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoCorrectRow fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
