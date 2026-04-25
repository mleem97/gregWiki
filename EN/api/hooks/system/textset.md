---
title: TextSet
description: Documentation for greg.SYSTEM.TextSet
path: /api/hooks/system/textset
---

# TextSet

> **Hook ID:** `greg.SYSTEM.TextSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.SetText

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::SetText(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TextSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TextSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TextSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TextSet", function(payload)
    greg.log("Hook greg.SYSTEM.TextSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TextSet fired")

greg.on("greg.SYSTEM.TextSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TextSet", (payload) => {
    console.log("Hook greg.SYSTEM.TextSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TextSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TextSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TextSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
