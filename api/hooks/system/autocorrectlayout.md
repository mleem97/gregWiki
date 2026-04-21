---
title: AutoCorrectLayout
description: Documentation for greg.SYSTEM.AutoCorrectLayout
path: /api/hooks/system/autocorrectlayout
---

# AutoCorrectLayout

> **Hook ID:** `greg.SYSTEM.AutoCorrectLayout`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.AutoCorrectLayout

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::AutoCorrectLayout(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoCorrectLayout` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoCorrectLayout", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoCorrectLayout");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoCorrectLayout", function(payload)
    greg.log("Hook greg.SYSTEM.AutoCorrectLayout received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoCorrectLayout fired")

greg.on("greg.SYSTEM.AutoCorrectLayout", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoCorrectLayout", (payload) => {
    console.log("Hook greg.SYSTEM.AutoCorrectLayout triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoCorrectLayout".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoCorrectLayout", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoCorrectLayout fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
