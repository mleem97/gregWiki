---
title: KeyType
description: Documentation for greg.SYSTEM.KeyType
path: /api/hooks/system/keytype
---

# KeyType

> **Hook ID:** `greg.SYSTEM.KeyType`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.KeyType

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::KeyType()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyType` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyType", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyType");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyType", function(payload)
    greg.log("Hook greg.SYSTEM.KeyType received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyType fired")

greg.on("greg.SYSTEM.KeyType", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyType", (payload) => {
    console.log("Hook greg.SYSTEM.KeyType triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyType".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyType", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyType fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
