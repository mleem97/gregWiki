---
title: HasKey
description: Documentation for greg.SYSTEM.HasKey
path: /api/hooks/system/haskey
---

# HasKey

> **Hook ID:** `greg.SYSTEM.HasKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.HasKey

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::HasKey(OSK_KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HasKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HasKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HasKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HasKey", function(payload)
    greg.log("Hook greg.SYSTEM.HasKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HasKey fired")

greg.on("greg.SYSTEM.HasKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HasKey", (payload) => {
    console.log("Hook greg.SYSTEM.HasKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HasKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HasKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HasKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
