---
title: NewLineFix
description: Documentation for greg.SYSTEM.NewLineFix
path: /api/hooks/system/newlinefix
---

# NewLineFix

> **Hook ID:** `greg.SYSTEM.NewLineFix`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.NewLineFix

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::NewLineFix()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NewLineFix` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NewLineFix", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NewLineFix");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NewLineFix", function(payload)
    greg.log("Hook greg.SYSTEM.NewLineFix received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NewLineFix fired")

greg.on("greg.SYSTEM.NewLineFix", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NewLineFix", (payload) => {
    console.log("Hook greg.SYSTEM.NewLineFix triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NewLineFix".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NewLineFix", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NewLineFix fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
