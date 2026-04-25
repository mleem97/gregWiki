---
title: SelectKey
description: Documentation for greg.SYSTEM.SelectKey
path: /api/hooks/system/selectkey
---

# SelectKey

> **Hook ID:** `greg.SYSTEM.SelectKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.SelectKey

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::SelectKey(OSK_UI_Key)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectKey", function(payload)
    greg.log("Hook greg.SYSTEM.SelectKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectKey fired")

greg.on("greg.SYSTEM.SelectKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectKey", (payload) => {
    console.log("Hook greg.SYSTEM.SelectKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
