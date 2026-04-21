---
title: GetSelectedKey
description: Documentation for greg.SYSTEM.GetSelectedKey
path: /api/hooks/system/getselectedkey
---

# GetSelectedKey

> **Hook ID:** `greg.SYSTEM.GetSelectedKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.GetSelectedKey

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::GetSelectedKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSelectedKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSelectedKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSelectedKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSelectedKey", function(payload)
    greg.log("Hook greg.SYSTEM.GetSelectedKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSelectedKey fired")

greg.on("greg.SYSTEM.GetSelectedKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSelectedKey", (payload) => {
    console.log("Hook greg.SYSTEM.GetSelectedKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSelectedKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSelectedKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSelectedKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
