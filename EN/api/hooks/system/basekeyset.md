---
title: BaseKeySet
description: Documentation for greg.SYSTEM.BaseKeySet
path: /api/hooks/system/basekeyset
---

# BaseKeySet

> **Hook ID:** `greg.SYSTEM.BaseKeySet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.SetBaseKey

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::SetBaseKey(GameObject)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BaseKeySet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BaseKeySet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BaseKeySet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BaseKeySet", function(payload)
    greg.log("Hook greg.SYSTEM.BaseKeySet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BaseKeySet fired")

greg.on("greg.SYSTEM.BaseKeySet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BaseKeySet", (payload) => {
    console.log("Hook greg.SYSTEM.BaseKeySet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BaseKeySet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BaseKeySet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BaseKeySet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
