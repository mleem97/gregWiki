---
title: GetKeyName
description: Documentation for greg.SYSTEM.GetKeyName
path: /api/hooks/system/getkeyname
---

# GetKeyName

> **Hook ID:** `greg.SYSTEM.GetKeyName`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.GetKeyName

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::GetKeyName()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetKeyName` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetKeyName", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetKeyName");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetKeyName", function(payload)
    greg.log("Hook greg.SYSTEM.GetKeyName received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetKeyName fired")

greg.on("greg.SYSTEM.GetKeyName", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetKeyName", (payload) => {
    console.log("Hook greg.SYSTEM.GetKeyName triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetKeyName".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetKeyName", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetKeyName fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
